import { useGetData } from "../../hooks"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants"
import { DeliveryTime, ImageCard, NameRestaurant, Rectangle, RestaurantCardContainer, Shipping, TimeShipping } from "./styled"

export const RestaurantCard = () => {

    useProtectedPage()
    const navigate = useNavigate()

    const goToDetailsPage = (navigate, id) => {
        navigate(`/details/${id}`)
      }
    

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants`, {
        headers:{
            auth: localStorage.getItem('token')
        }
    })
const lista = data && data.restaurants.map((restaurant) => {

    
    const price = restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(
        <RestaurantCardContainer key={restaurant.id}>
            
                <Rectangle onClick={()=>{goToDetailsPage(navigate, restaurant.id)}}>
                    <ImageCard src={restaurant.logoUrl}/>
                    <NameRestaurant>{restaurant.name}</NameRestaurant>
                    <TimeShipping>
                        <DeliveryTime>{restaurant.deliveryTime} min</DeliveryTime>
                        <br/>
                        <Shipping>Frete {price}</Shipping>
                        <br/>
                    </TimeShipping>
                </Rectangle>
            </RestaurantCardContainer>
    )
})

return (
    <div>
       {lista}
    </div>
)
}