import { React, useState } from "react"
import { useForm } from "../../hooks"
import { Login, validateEmail, validatePassword } from "../../constants"
import { EmailInput } from '../../components/inputs/email.js';
import { PasswordInput } from '../../components/inputs/password.js';
import { useNavigate } from "react-router-dom";
import { goToSignUpPage, goToFeedPage } from "../../routes";
import * as Stl from '../../components/styled-containers';
import logoSmall from '../../assets/logo-small.png';
import { Button } from '@chakra-ui/react'


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
        <Stl.MainContainer>
            <form onSubmit={onSubmit}>
                <img src={logoSmall} alt="Logo Rappi4" />
                <h1>Entrar</h1>
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
                <Stl.EnterBtn type="submit" >Entrar</Stl.EnterBtn>
                <Stl.SignupBtn onClick={() => goToSignUpPage(navigate)} type="button">Não possui conta? Clique aqui</Stl.SignupBtn>
            </form>
        </Stl.MainContainer>
    )
}