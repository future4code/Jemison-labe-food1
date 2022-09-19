import { React, useState } from "react"
import { useForm } from "../../hooks"
import { Login, validateEmail, validatePassword } from "../../constants"
import { EmailInput } from '../../components/inputs/email.js';
import { PasswordInput } from '../../components/inputs/password.js';
import { useNavigate } from "react-router-dom";
import { goToSignUpPage, goToFeedPage } from "../../routes";
import logoSmall from '../../assets/logo-small.png';


export const LoginPage = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [form, onChange, Clear] = useForm({
        email: '',
        password: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.password));
        try {
            const { token } = isEmailValid && isPasswordValid && await Login({
                email: form.email,
                password: form.password
            });
            localStorage.setItem('token', token);
            goToFeedPage(navigate);
            setIsLoggedIn(true);
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <img src={logoSmall} alt="Logo Rappi4" />
                    <EmailInput
                        value={form.email}
                        onChange={onChange}
                        isValid={isEmailValid}
                    />
                    <PasswordInput
                        value={form.password}
                        onChange={onChange}
                        isValid={isPasswordValid}
                    />
                    <button type="submit" >Entrar</button>
                    <button onClick={() => goToSignUpPage(navigate)} type="button" variant="form-secondary">Não possui conta? Cadastrar</button>
                </form>
            </div>
        </div>
    )
}