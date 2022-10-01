import { React, useState } from "react"
import { useForm } from "../../hooks"
import { SignUp, validateName, validateEmail, validateCpf, validatePassword, CheckPassword } from "../../constants"
import { NameInput, EmailInput, CpfInput, PasswordInput, PassConfirmInput } from '../../components/inputs'
import { useNavigate } from "react-router-dom";
import {goToFeedPage } from "../../routes";
import logoSmall from '../../assets/logo-small.png';
import * as Stl from '../../components/'
import Header from "../../components/header";
import { Button } from "@chakra-ui/react";
import back from '../../assets/back.png'
import { Ghost, ImgBack } from "../../components/header/styled";

export const SignUpPage = () => {

    const navigate = useNavigate();
    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const Back = () => {
        navigate(-1)
    }

    const [form, onChange, Clear] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passConfirm: '',
    });

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);

    const onSubmit = async (e) => {
        setIsNameValid(false);
        setIsEmailValid(false);
        setIsCpfValid(false);
        setIsPasswordValid(false);
        setIsPasswordConfirmed(false)
        e.preventDefault();
        setIsNameValid(validateName(form.name));
        setIsEmailValid(validateEmail(form.email));
        setIsCpfValid(validateCpf(form.cpf))
        setIsPasswordValid(validatePassword(form.password));
        setIsPasswordConfirmed(CheckPassword(form.password, form.confirmPass))

        try {
            const { token } = isNameValid && isEmailValid && isCpfValid && isPasswordValid && isPasswordConfirmed && await SignUp({
                name: form.name,
                email: form.email,
                cpf: form.cpf,
                password: form.password,
                });
            localStorage.setItem('token', token);
            goToFeedPage(navigate);
        } catch (e) {
            console.log(e)
            alert(e.response.data.message)
        }
    }

    return (
        <>
        <Header 
                back={ <button onClick={Back}><ImgBack src={back}/></button>
                }
            
                 name ={
                    <h1>Cadastrar</h1>
                }   
                logout ={
                    <Ghost></Ghost>
                }

               />
        <Stl.MainContainer>
            <form onSubmit={onSubmit}>
                <img src={logoSmall} alt="logo rappi4" />
                <h1>Cadastrar</h1>
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
                <PassConfirmInput
                    value={form.confirmPass}
                    onChange={onChange}
                    isValid={isPasswordConfirmed}
                />
                <Stl.EnterBtn type="submit">Criar</Stl.EnterBtn>
            </form>
        </Stl.MainContainer>
    </>
    )
}