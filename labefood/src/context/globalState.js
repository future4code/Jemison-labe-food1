import { useState } from 'react';
import GlobalStateContext from './global.context.js';

const GlobalState = (props) => {

    const [cartRestaurantInfo, setCartRestaurantInfo] = useState({
   
    })

    const [cartProducts, setCartProducts] = useState([{
     

    }])

    const [ordersDate, setOredersDate] = useState([])

    return (
        <GlobalStateContext.Provider value={{ cartRestaurantInfo, setCartRestaurantInfo, cartProducts, setCartProducts, ordersDate, setOredersDate }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState