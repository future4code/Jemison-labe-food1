import { useGetData } from "../../hooks"
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants"
import { DeliveryTime, ImageCard, NameRestaurant, Rectangle, RestaurantCardContainer, Shipping, TimeShipping } from "./styled"

export const RestaurantCard = () => {

    useProtectedPage()

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants`, {
        headers:{
            auth: localStorage.getItem('token')
        }
    })
const lista = data && data.restaurants.map((restaurant) => {
    return(
        <RestaurantCardContainer key={restaurant.id}>
                <Rectangle>
                    <ImageCard src={restaurant.logoUrl}/>
                    <NameRestaurant>{restaurant.name}</NameRestaurant>
                    <TimeShipping>
                        <DeliveryTime>{restaurant.deliveryTime} min</DeliveryTime>
                        <br/>
                        <Shipping>Frete R${restaurant.shipping}</Shipping>
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