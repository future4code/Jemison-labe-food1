import useProtectedPage from "../../hooks/useProtectedPage";
import { useGetData } from "../../hooks";
import { BASE_URL } from '../../constants';
import { React } from "react";
import { OrderHistory } from '../../components'
import { goToAddAddressPage, goToUpdatePerfil } from "../../routes";
import { useNavigate } from "react-router-dom";
import * as Stl from './style.js';
import editIcon from '../../assets/edit.png';


export const MyProfilePage = () => {

    useProtectedPage()

    const navigate = useNavigate()



    const [data, isLoading, error] = useGetData(`${BASE_URL}/profile`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    if (data && data.user) {
        const cpfStr = JSON.stringify((data.user.cpf))
        const cpfString = cpfStr.substring(1, 4) + '.' + cpfStr.substring(4, 7) + '.' + cpfStr.substring(7, 10) + '-' + cpfStr.substring(10, 12)
        return (
            <Stl.Main key={data.user.id}>
                <Stl.ProfileData>
                    <div>
                        <p>{data.user.name}</p>
                        <p>{data.user.email}</p>
                        <p>{cpfString}</p>
                    </div>

                    <button onClick={() => goToUpdatePerfil(navigate)}>
                        <img src={editIcon} />
                    </button>
                </Stl.ProfileData>
                <Stl.AddressInfo>
                    <div>
                        <h1>Endereço Cadastrado</h1>
                        <p>{data.user.address}</p>
                    </div>
                    <button onClick={() => goToAddAddressPage(navigate)}>
                        <img src={editIcon} />
                    </button>
                </Stl.AddressInfo>
                <Stl.OrderHistory>
                    <p>Histórico de pedidos</p>
                  <hr></hr>
                    <OrderHistory />
                </Stl.OrderHistory>
            </Stl.Main >
        );
    }
}