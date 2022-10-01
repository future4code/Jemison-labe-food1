import { useEffect, useState } from "react"
import { GetRestaurants } from "../../constants";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useGetData } from "../../hooks";
import {BASE_URL} from '../../constants'; 
import Header from "../../components/header";
import { Button } from "@chakra-ui/react";
import back from '../../assets/back.png'
import { ImgBack } from "../../components/header/styled";
import { useNavigate } from "react-router-dom";

export const FeedPage = () => {
    const navigate = useNavigate();

    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const Back = () => {
        navigate(-1)
    }


    useProtectedPage()

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants`,{
        headers:{
        auth: localStorage.getItem('token')
        }
    })
    const lista = data && data.restaurants?.map((restaurant)=>{

        return(
            <>
            <Header 
                back={ <button onClick={Back}><ImgBack src={back}/></button>
                }
            
                 name ={
                    <h1>Restaurantes</h1>
                }   

                logout={
                    <Button colorScheme='red' onClick={goToLogout} >Logout</Button>
                }/>
            <div key={restaurant.id}>
                <img src={restaurant.logoUrl}/>
                <p>{restaurant.name}</p>
                <br/>
                <p>{restaurant.description}</p>
                <br/>
                <p>{restaurant.address}</p>
                <br/>
                <p>{restaurant.category}</p>
                <br/>
                <p>{restaurant.deliveryTime}</p>
                <br/>
                <p>{restaurant.shipping}</p>
                <br/>
            </div>
        </>
        )
    })
     return (
        <div>
           {lista}
        </div>
    
    
    )

}