import { useState } from 'react';
import GlobalStateContext from './global.context.js';

const GlobalState = (props) => {

    const [cartRestaurantInfo, setCartRestaurantInfo] = useState({
        'restaurantName': '',
        'restaurantAddress': '',
        'restaurantDeliveryTime': '',
        'restaurantShipping': ''
    })

    const [cartProducts, setCartProducts] = useState([{
        'id':'',
        'image':'',
        'name':'',
        'descrtition':'',
        'price': 0,
        'quantity': 0

    }])

    const [ordersDate, setOredersDate] = useState([])

    return (
        <GlobalStateContext.Provider value={{ cartRestaurantInfo, setCartRestaurantInfo, cartProducts, setCartProducts, ordersDate, setOredersDate }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState