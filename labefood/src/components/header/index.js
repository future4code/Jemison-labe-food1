import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from './styled.js';
import { Bar, Title, ImgBack } from "./styled.js";
import { WrapItem, Button } from "@chakra-ui/react";
import back from '../../assets/back.png'
    



export const Header = (props) => {

    const navigate = useNavigate();

    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const Back = () => {
        navigate(-1)
    }

    return (
        <Bar>
            <button onClick={Back}><ImgBack src={back} /></button>

            <Title>
                {props.name}
            </Title>
            <WrapItem>
                <Button colorScheme='red' onClick={goToLogout}>Logout</Button>
            </WrapItem>
        </Bar>
    )

}