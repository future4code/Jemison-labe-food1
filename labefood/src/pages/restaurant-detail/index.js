import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetData } from '../../hooks';
import { BASE_URL } from '../../constants';
import * as Stl from './style.js';

export const RestaurantDetailPage = () => {


    const [id, setId] = useState(useParams())

    const idObject = JSON.stringify(id);
    const IdString = idObject.slice(7, -2);

    const navigate = useNavigate()

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants/${IdString}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    const list = data && data.restaurant.products.map((product) => {
        if(data && data.restaurant.products){
        return (
            <div key={product.id}>
                <img src={product.photoUrl} />
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>R${product.price}</p>
            </div>
        )
    }
})

    if (data && data.restaurant) {
        return (
            <div>
                <img src={data.restaurant.logoUrl} />
                <p>{data.restaurant.name}</p>
                <p>{data.restaurant.category}</p>
                <div>
                    <p>{data.restaurant.deliveryTime}</p>
                    <p>FreteR${data.restaurant.shipping},00</p>
                </div>
                <p>{data.restaurant.address}</p>
            
            <div>
                {list}
            </div>
            
            </div>

        

        )
    }
}



