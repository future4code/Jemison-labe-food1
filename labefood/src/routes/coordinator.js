export const goToLoginPage = (navigator) => {
    navigator('/');
}

export const goToSignUpPage = (navigator) => {
    navigator('/signup');
}

export const goToFeedPage = (navigator) => {
    navigator('/feed');
}

export const goToDetailsPage = (navigator, id) => {
    navigator('/details/:id');
}

export const goToMyProfilePage = (navigator) => {
    navigator(`/myprofile`);
}

export const goToCartPage = (navigator) => {
    navigator('/cart');
}

export const goToAddAddressPage = (navigator) => {
    navigator('/add-address');
}

export const goToUpdatePerfil = (navigator) => {
    navigator('/update-perfil')
}

