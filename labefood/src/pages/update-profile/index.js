import { React, useState } from "react";
import { BASE_URL } from "../../constants";
import { goToMyProfilePage } from "../../routes";
import { useForm } from '../../hooks';
import { validateName, validateEmail, validateCpf } from "../../constants";
import { NameInput, EmailInput, CpfInput } from '../../components/inputs';
import * as Stl from '../../components'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UpdatePerfilPage = () => {
    
   const navigate = useNavigate()

    const [form, onChange, Clear] = useForm({
        name: '',
        email: '',
        cpf: '',
    });

    const [isNameValid, setIsNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);

    const onSubmit = (e) => {

        e.preventDefault();
        setIsNameValid(validateName(form.name));
        setIsEmailValid(validateEmail(form.email));
        setIsCpfValid(validateCpf(form.cpf))

        if (isNameValid && isEmailValid && isCpfValid) {
           axios.put(`${BASE_URL}/profile`, {
                name: form.name,
                email: form.email,
                cpf: form.cpf,
            }, {
                headers: {
                    auth: localStorage.getItem('token')
                }})
                .then((res) => {
                    alert("Dados Atualizados");
                    goToMyProfilePage(navigate)
                })
                .catch((err) => {
                    alert("Houve um erro, tenta novamente")
                    Clear()

            })
        }

    }

    return (
        <Stl.MainContainer>
            <form onSubmit={onSubmit}>
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
                <Stl.EnterBtn type="submit">Criar</Stl.EnterBtn>
            </form>
        </Stl.MainContainer>
    )

}



