import Header from "../../components/header"
import { useNavigate } from "react-router-dom";
import { ImgBack } from "../../components/header/styled";
import back from '../../assets/back.png'
import { Button } from "@chakra-ui/react";



export const CartPage = () =>{

    const navigate = useNavigate();

    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const Back = () => {
        navigate(-1)
    }


    return(
        <>
            <Header 
                back={ <button onClick={Back}><ImgBack src={back}/></button>
                }
            
                 name ={
                    <h1>Carrinho</h1>
                }   

                logout={
                    <Button colorScheme='red' onClick={goToLogout} >Logout</Button>
                }/>
        </>
    )
    
    }