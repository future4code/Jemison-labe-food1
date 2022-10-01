import Header from "../../components/header";
import { Button } from "@chakra-ui/react";
import back from '../../assets/back.png'
import { ImgBack } from "../../components/header/styled";
import { useNavigate } from "react-router-dom";


export const AddAdressPage = () =>{

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
                    <h1>Cadastrar Endereço</h1>
                }   

                logout={
                    <Button colorScheme='red' onClick={goToLogout} >Logout</Button>
                }/>

         
    </>
    )
    
    }