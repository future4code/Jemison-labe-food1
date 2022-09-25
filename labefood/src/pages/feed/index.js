
import useProtectedPage from "../../hooks/useProtectedPage";
import { useGetData } from "../../hooks";
import {BASE_URL} from '../../constants'; 

export const FeedPage = () => {
    
    useProtectedPage()

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants`,{
        headers:{
        auth: localStorage.getItem('token')
        }
    })
 
    const lista = data && data.restaurants.map((restaurant)=>{

        return(
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
        )
    })

import { RestaurantCard } from "../../components/restaurant-card";

export const FeedPage = () => {
    

     return (
        <div>
           <RestaurantCard/>
        </div>
    )

}