import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetData } from '../../hooks/useGetData';
import { BASE_URL } from '../../constants'

export const Filter = () => {
    
    useProtectedPage()

    

    const [data] = useGetData(`${BASE_URL}/restaurants`, {
        headers:{
            auth: localStorage.getItem('token')
        }
    })

    const categoryRestaurant = data && data.restaurants.map((restaurant, i) => {
        return(
            <div key={i}>
                <span >
                    {restaurant.category}
                </span>
            </div>
        )
    })


    return(
        <div>
            {categoryRestaurant}
        </div>
    )
}