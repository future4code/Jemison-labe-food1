import { React, useState } from "react";
import { BASE_URL } from "../../constants";
import { goToMyProfilePage } from "../../routes";
import { useForm } from '../../hooks';
import {
    FormControl,
    FormErrorMessage,
} from '@chakra-ui/react';
import { validateStreet, validateNumber, validateNeighbourhood, validateCity, validateState } from "../../constants";
import * as Stl from '../../components';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddAddressPage = () => {

    const navigate = useNavigate()

    const [form, onChange, Clear] = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
    });

    const [isStreetValid, setIsStreetValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isStateValid, setIsStateValid] = useState(true);

    const onSubmit = (e) => {

        e.preventDefault();
        setIsStreetValid(validateStreet(form.street));
        setIsNumberValid(validateNumber(form.number));
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood));
        setIsCityValid(validateCity(form.city));
        setIsStateValid(validateState(form.state));
        
        if (isStreetValid && isNumberValid && isNeighbourhoodValid && isCityValid && isStateValid == true) {
            axios.put(`${BASE_URL}/address`, {
                street: form.street,
                number: form.number,
                neighbourhood: form.neighbourhood,
                city: form.city,
                state: form.state,
                complement: form.complement
            }, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
                .then((res) => {
                    localStorage.setItem('token', res.data.token)
                    alert("Endereço Cadastrado Atualizados");
                    goToMyProfilePage(navigate)
                })
                .catch((err) => {
                    alert("Houve um erro, tente novamente")
                    Clear()

                })
        }else{alert("Algum campo Obrigatório não foi preenchido")}
    }

    return (
        <Stl.MainContainer>
            <form onSubmit={onSubmit}>
                <h1>Meu endereço</h1>
                <FormControl isInvalid={!isStreetValid}>
                    <pre>Logradouro* </pre>
                    <input
                        name="street"
                        value={form.street}
                        onChange={onChange}
                        placeholder="Rua/ Av."
                    />
                    {!isStreetValid ? (
                        <FormErrorMessage as="p">
                            Campo Obirgatório
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isInvalid={!isNumberValid}>
                    <pre>Number*    </pre>
                    <input
                        name="number"
                        value={form.number}
                        onChange={onChange}
                        placeholder="Número"
                    />
                    {!isNumberValid ? (
                        <FormErrorMessage as="p">
                            Campo Obirgatório
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl>
                    <pre>complemento</pre>
                    <input
                        name="complement"
                        value={form.complement}
                        onChange={onChange}
                        placeholder="Apto/Bloco"
                    />
                </FormControl>

                <FormControl isInvalid={!isNeighbourhoodValid}>
                    <pre>Bairro*    </pre>
                    <input
                        name="neighbourhood"
                        value={form.neighbourhood}
                        onChange={onChange}
                        placeholder="Bairro"
                    />
                    {!isNeighbourhoodValid ? (
                        <FormErrorMessage as="p">
                            Campo Obirgatório
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isInvalid={!isCityValid}>
                    <pre>Cidade*    </pre>
                    <input
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        placeholder="Cidade"
                    />
                    {!isCityValid ? (
                        <FormErrorMessage as="p">
                            Campo Obirgatório
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <FormControl isInvalid={!isStateValid}>
                    <pre>Estado*    </pre>
                    <input
                        name="state"
                        value={form.state}
                        onChange={onChange}
                        placeholder="Estado"
                    />
                    {!isStateValid ? (
                        <FormErrorMessage as="p">
                            Campo Obirgatório
                        </FormErrorMessage>
                    ) : undefined}
                </FormControl>

                <Stl.EnterBtn type="submit">Criar</Stl.EnterBtn>
            </form>
        </Stl.MainContainer>
    )

}