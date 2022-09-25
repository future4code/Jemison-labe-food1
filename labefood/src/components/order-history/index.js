import useProtectedPage from "../../hooks/useProtectedPage";
import { useGetDataOrder } from "../../hooks";
import { BASE_URL } from '../../constants';
import axios from "axios";
import { React, useState, useEffect } from "react";

export const OrderHistory = () => {

    useProtectedPage()
    //Só consegui renderizar esta página criando uma cópia do hook customizado, realmente não consigo entenfer o motivo de não funcionar no hook já criado anteriormente
    const [data, isLoading, error] = useGetDataOrder(`${BASE_URL}/orders/history`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
    const lista = data && data.orders.map((order, index) => {

        return (
            <div key={index}>
                <p>{order.totalPrice}</p>
                <p>{order.restaurantName}</p>
            </div>
        )
    })
    return (
        <div>
            {lista}
        </div>
    )


}
