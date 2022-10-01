import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from './styled.js';
import { Bar, Title, ImgBack } from "./styled.js";
import { WrapItem, Button } from "@chakra-ui/react";

  



function  Header (props)  {

     return (
        <Bar>
            <div>{props.back}</div>

            <Title>
                {props.name}
            </Title>
            <WrapItem>
                <div>{props.logout}</div>
            </WrapItem>
        </Bar>
    )

}

export default Header