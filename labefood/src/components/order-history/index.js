import useProtectedPage from "../../hooks/useProtectedPage";
import { useGetDataOrder } from "../../hooks";
import { BASE_URL } from '../../constants';
import { React, useState } from "react";
import * as Stl from './style.js';

export const OrderHistory = () => {

    useProtectedPage()
    //Só consegui renderizar esta página criando uma cópia do hook customizado, realmente não consigo entenfer o motivo de não funcionar no hook já criado anteriormente
    const [data, isLoading, error] = useGetDataOrder(`${BASE_URL}/orders/history`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    const lista = data && data.orders.map((order, index) => {
    
        const price = order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return (
            <Stl.Order key={index}>
                <h1>{order.restaurantName}</h1>
                <Stl.Data>25 setembro 2022</Stl.Data>
                <p>SUBTOTAL {price}</p>
            </Stl.Order>
        )
    })
    return (
        <div>
            {lista}
        </div>
    )


}
