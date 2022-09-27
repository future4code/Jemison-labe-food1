import { useState } from 'react';
import GlobalStateContext  from './global.context.js';

const GlobalState = (props) => {

const [cart, setCart]= useState([])
const [ordersDate, setOredersDate]= useState([])

return (
    <GlobalStateContext.Provider value={{cart, setCart, ordersDate, setOredersDate }}>
        {props.children}
    </GlobalStateContext.Provider>
)
}
export default GlobalState