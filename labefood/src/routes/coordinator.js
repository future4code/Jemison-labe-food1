export const goToLoginPage = (navigator) => {
    navigator('/login');
}

export const goToSignUpPage = (navigator) => {
    navigator('/signup');
}

export const goToFeedPage = (navigator) => {
    navigator('/feed');
}

export const goToSearchPage = (navigator) => {
    navigator('/search');
}

export const goToMyProfilePage = (navigator, id) => {
    navigator(`/myprofile/${id}`);
}

export const goToCartPage = (navigator) => {
    navigator('/cart');
}

export const goToAddAdressPage = (navigator) => {
    navigator('/add-adress');
}