import React from "react";
import { Bar, Title } from "./styled.js";
import { WrapItem } from "@chakra-ui/react";

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