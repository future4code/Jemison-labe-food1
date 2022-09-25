import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import {
    LoginPage,
    AddAddressPage,
    CartPage,
    FeedPage,
    MyProfilePage,
    SearchPage,
    SignUpPage,
    UpdatePerfilPage
} from '../pages'



export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/myprofile' element={<MyProfilePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/add-address' element={<AddAddressPage />} />
                <Route path='/update-perfil' element={<UpdatePerfilPage />} />
            </Routes>
        </BrowserRouter>

    )
}