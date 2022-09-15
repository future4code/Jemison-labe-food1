import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    AddAdressPage,
    CartPage,
    FeedPage,
    MyProfilePage,
    SearchPage,
    SignUpPage
} from '../pages'



export const Router = () => {
    return (
        <BrowserRouter>
        <p>cabeçalho</p>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/myprofile/:id' element={<MyProfilePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/add-adress' element={<AddAdressPage />} />
            </Routes>
        </BrowserRouter>

    )
}