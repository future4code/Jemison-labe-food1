import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    AddAddressPage,
    CartPage,
    FeedPage,
    MyProfilePage,
    RestaurantDetailPage,
    SignUpPage,
    UpdatePerfilPage
} from '../pages'



export const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/details/:id' element={<RestaurantDetailPage/>} />
                <Route path='/myprofile' element={<MyProfilePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/add-address' element={<AddAddressPage />} />
                <Route path='/update-perfil' element={<UpdatePerfilPage />} />
            </Routes>
        </BrowserRouter>

    )
}