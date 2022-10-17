import homepage from '../../assets/homepage.png'
import shoppingCart from '../../assets/shopping-cart.png'
import avatar from '../../assets/avatar.png'
import { Item1, Item2, Item3, TabBarContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToCartPage, goToLoginPage, goToMyProfilePage } from '../../routes/coordinator'


export const TabBar = () => {

    const navigate = useNavigate();

    const onClickCard = () => {
        goToLoginPage(navigate);
    }

    const onClickCart = () => {
        goToCartPage(navigate)
    }

    const onClickProfile = () => {
        goToMyProfilePage(navigate)
    }

    return(
        <TabBarContainer>
            <Item1 onClick={() => onClickCard()}>
                <img src={homepage} />
            </Item1>
            <Item2 onClick={() => onClickCart()} >
                <img src={shoppingCart}/>
            </Item2>
            <Item3 onClick={() => onClickProfile()} >
                <img src={avatar}/>
            </Item3>
        </TabBarContainer>
    )
}