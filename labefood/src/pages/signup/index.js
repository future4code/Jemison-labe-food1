import { React, useState } from "react"
import { useForm } from "../../hooks"
import {SignUp, validateName, validateEmail, validateCpf, validatePassword} from "../../constants"
import {NameInput, EmailInput, CpfInput, PasswordInput } from '../../components/inputs'
import { useNavigate } from "react-router-dom";
import { goToSignUpPage, goToFeedPage } from "../../routes";
import logoSmall from '../../assets/logo-small.png';

export const SignUpPage = () => {

    const navigate = useNavigate();

    const [form, onChange, Clear] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
    });

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const[isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsNameValid(validateName(form.name));
        setIsEmailValid(validateEmail(form.email));
        setIsCpfValid(validateCpf(form.cpf))
        setIsPasswordValid(validatePassword(form.password));
       try{
        const {token} = isNameValid && isEmailValid && isCpfValid && isPasswordValid && await SignUp({
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password,
        });
        localStorage.setItem('token', token);
        goToFeedPage(navigate);
       } catch(e){
        console.log(e)
        alert(e.response.data.message)
       }
    }

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <img src={logoSmall} alt="logo rappi4"/>
                    <NameInput 
                        value={form.name}
                        onChange={onChange}
                        isValid={isNameValid}
                    />
                    <EmailInput 
                        value={form.email} 
                        onChange={onChange}
                        isValid={isEmailValid}
                    />
                     <CpfInput 
                        value={form.cpf} 
                        onChange={onChange}
                        isValid={isCpfValid}
                    />
                    <PasswordInput 
                        value={form.password}
                        onChange={onChange}
                        isValid={isPasswordValid}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}