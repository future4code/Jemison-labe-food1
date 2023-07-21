import { React, useState, useContext } from 'react';
import GlobalStateContext from '../../context/global.context';

export const CartPage = () => {

    const { cartRestaurantInfo, setCartRestaurantInfo, cartProducts, setCartProducts } = useContext(GlobalStateContext)

console.log(cartProducts)
    const lista = cartProducts.map((product) => {
        return (
            <div>
                <p>{product.name}</p>
            </div>
        )  
  })



}