import { React, useState } from "react"
import { useForm } from "../../hooks";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { validateName, validateEmail, validateCpf, validatePassword} from "../../constants";
import { NameInput, EmailInput, CpfInput, PasswordInput, PassConfirmInput } from '../../components/inputs';
import { useNavigate } from "react-router-dom";
import {goToAddAddressPage } from "../../routes";
import logoSmall from '../../assets/logo-small.png';
import * as Stl from '../../components/'

export const SignUpPage = () => {

    const navigate = useNavigate();

    const [form, onChange, Clear] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPass: '',
    });
 
    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsNameValid(validateName(form.name));
        setIsEmailValid(validateEmail(form.email));
        setIsCpfValid(validateCpf(form.cpf))
        setIsPasswordValid(validatePassword(form.password));
        setIsPasswordConfirmed(form.password === form.confirmPass)
        console.log(form.password)
        console.log(form.confirmPass)
        console.log({isPasswordConfirmed})

       if(isNameValid && isEmailValid && isCpfValid && isPasswordValid && isPasswordConfirmed){
        axios.post(`${BASE_URL}/signup`, { 
                name: form.name,
                email: form.email,
                cpf: form.cpf,
                password: form.password,
                })
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    goToAddAddressPage(navigate);
                })
                .catch((err) => {
                   alert(err.message)
                })
        } else { alert("Um dos campos não foi preenchido corretamente") }
    }
          
    return (
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

    )
}