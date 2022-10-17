import { React, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetData } from '../../hooks';
import { BASE_URL } from '../../constants';
import * as Stl from './style.js';
import GlobalStateContext from '../../context/global.context';
import {
    Button,
    useNumberInput,
    HStack,
    Input
} from '@chakra-ui/react';

export const RestaurantDetailPage = () => {

    const navigate = useNavigate()

    const [id, setId] = useState(useParams())

    //tranformação do ID em uma string, pq o id.id não retorna no axios
    const idObject = JSON.stringify(id);
    const IdString = idObject.slice(7, -2);

    const { cartRestaurantInfo, setCartRestaurantInfo, cartProducts, setCartProducts } = useContext(GlobalStateContext)

    const [data, isLoading, error] = useGetData(`${BASE_URL}/restaurants/${IdString}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            min: 0,
            defaultValue: 0,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const [quantityProductCart, setQuantityProductCart] = useState('')
    const [arrayIds, setArrayIds] = useState([])


    const AddToCart = (restaurantSelected, productSelected) => {

        const obj = {
            restaurantName: restaurantSelected.restaurant.name,
            restaurantAddress: restaurantSelected.restaurant.address,
            restaurantDeliveryTime: restaurantSelected.deliveryTime,
            restaurantShipping: restaurantSelected.shipping
        }

        const prdct = {
            id: productSelected.id,
            image: productSelected.photoUrl,
            name: productSelected.name,
            descrtition: productSelected.description,
            price: productSelected.price,
            quantity: input.value,
        }
        cartProducts.push({ prdct })


        setQuantityProductCart(input.value)
        arrayIds.push(productSelected.id)

        setCartRestaurantInfo(obj)
        setCartProducts(cartProducts)
        setIsModalVisible(false)
    }

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [controleModal, setControleModal] = useState('')
    const OpenModal = (controle) => {
        setControleModal(controle.id)
        setIsModalVisible(true)
    }
    
    const RemoveItem = ((value)=> {
       const lista = arrayIds.filter((prdct)=> { 
            return prdct !== value.id });
            setArrayIds(lista)
            
                  }
       )

    const list = data && data.restaurant.products.map((product) => {
     
        const price = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return (

            <Stl.Product key={product.id}>
                <img src={product.photoUrl} />
                <Stl.Description>
                    <h1>{product.name}</h1>
                    <h2>{product.description}</h2>
                    <p>{price}</p>
                </Stl.Description>

                {arrayIds.includes(product.id) && quantityProductCart > 0 ? (
                
                <Stl.RemoveDiv>
                    <p>{quantityProductCart}</p>
                    <Stl.RemoveButton onClick={()=>RemoveItem(product)}>remover</Stl.RemoveButton>

                    </Stl.RemoveDiv>
                   
                 ) : (
                 <div>
                <Stl.AddBtn onClick={() => OpenModal(product)}>adicionar</Stl.AddBtn>
                 
                {isModalVisible && controleModal === product.id ?
                    <Stl.ModalMain>
                        <Stl.ModalContainer>
                            <Stl.ModalTitle>Selecione a quantidade desejada</Stl.ModalTitle>
                            <HStack maxW='200px'>
                                <Button {...dec}>-</Button>
                                <Input   {...input} />
                                <Button {...inc}>+</Button>
                            </HStack>

                            <Stl.ModalBtn onClick={() => AddToCart(data, product)}>ADICIONAR AO CARRINHO</Stl.ModalBtn>
                        </Stl.ModalContainer>
                    </Stl.ModalMain>: null}
                    </div>)}
            </Stl.Product>
        )})
    
    
    if (data && data.restaurant) {
        return (
            <Stl.Main >

                <Stl.Restaurant>
                    <img src={data.restaurant.logoUrl} />

                    <h1>{data.restaurant.name}</h1>
                    <p>{data.restaurant.category}</p>
                    <Stl.Shipping>
                        <p>{data.restaurant.deliveryTime} min</p>
                        <p>FreteR$ {data.restaurant.shipping},00</p>
                    </Stl.Shipping>
                    <p>{data.restaurant.address}</p>
                </Stl.Restaurant>
                <Stl.Menu>
                    <p>Cardápio</p>
                    <hr></hr>
                </Stl.Menu>
                <div>
                    {list}
                </div>

            </Stl.Main >
        )
    }
}