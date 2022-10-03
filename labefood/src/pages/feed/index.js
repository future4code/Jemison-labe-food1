import { useState, useContext } from "react";
import { Filter } from "../../components/filter";
import { RestaurantCard } from "../../components/restaurant-card";
import { TabBar } from "../../components/tab-bar";
import { useGetData } from '../../hooks';
import { BASE_URL } from '../../constants';
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../context/global.context";
import { FiltersContainer, DivTab } from "./styled";
import { StatLabel } from "@chakra-ui/react";

export const FeedPage = () => {

    useProtectedPage()

    const [id, setId] = useState(useParams())

    const idObject = JSON.stringify(id);
    const IdString = idObject.slice(7, -2);
    // const {data, error, isLoading} = useContext(GlobalStateContext)
    const [category, setCategory] = useState("")
    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants/${IdString}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
    const restaurantList = data && data.restaurants.map((restaurant) => {
        if(restaurant.category === category){
            return <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
        } else if (category === ""){
            return <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
        }
    })

return (
        <div>
            <FiltersContainer>
                <button onClick={()=>{setCategory("Hamburguer")}}>Burger</button>
                <button onClick={()=>{setCategory("Asiática")}}>Asiática</button>
                <button onClick={()=>{setCategory("Árabe")}}>Árabe</button>
                <button onClick={()=>{setCategory("Italiana")}}>Italiana</button>
                <button onClick={()=>{setCategory("Sorvetes")}}>Sorvetes</button>
                <button onClick={()=>{setCategory("Carnes")}}>Carnes</button>
                <button onClick={()=>{setCategory("Baiana")}}>Baiana</button>
                <button onClick={()=>{setCategory("Petiscos")}}>Petiscos</button>
                <button onClick={()=>{setCategory("Mexicana")}}>Mexicana</button>
            </FiltersContainer>
            {/* <Filter/> */}
            <RestaurantCard />
            <DivTab>
            <TabBar/>
            </DivTab>
        </div>
    )
}