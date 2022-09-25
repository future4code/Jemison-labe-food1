import { SliderThumb } from "@chakra-ui/react"
import * as Slt from '../../components/'
import back from '../../assets/back.png'
import {
    LogroudoInput,
    NumeroInput,
    ComplementoInput,
    BairroInput,
    CidadeInput,
    EstadoInput
} from '../../components/inputs'
import { SalvarBtn } from "../../components/"
import { useState } from "react"
import { useForm } from "../../hooks"

export const AddAdressPage = () =>{

    const [form, onChange, Clear] = useForm({
        street: '',
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })


    const [isStreetValid, setIsStreetValid] = useState(true)
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isStateValid, setIsStateValid] = useState(true);
    const [isComplementValid, setIsComplementValid] = useState(true);

    // const onSubmit = async (e) => {
    //     setIsStreetValid(false);
    //     setIsNumberValid(false);
    //     setIsNeighbourhoodValid(false);
    //     setIsCityValid(false);
    //     setIsStateValid(false)
    //     setIsComplementValid(false)
    //     e.preventDefault();
    //     setIsStreetValid(validateStreet(form.street));
    //     setIsNumberValid(validateNumber(form.number));
    //     setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
    //     setIsCityValid(validateCity(form.city));
    //     setIsStateValid(validateState(form.state))
    //     setIsComplementValid(validateComplement(form.complement))

    //     try {
    //         const {token} = 
    //         isStreetValid && 
    //         isNumberValid && 
    //         isNeighbourhoodValid && 
    //         isCityValid &&
    //         isStateValid &&
    //         isComplementValid
    //     }
    // }

    return(
        <Slt.MainContainer>
            <form >
                <img src={back} alt="icon back" />
                <h1>Endereço</h1>

                <LogroudoInput
                    value={form.street}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <NumeroInput
                    value={form.number}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <ComplementoInput
                    value={form.number}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <BairroInput
                    value={form.number}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <CidadeInput
                    value={form.number}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <EstadoInput
                    value={form.number}
                    onChange={onChange}
                    isValid={isStreetValid}
                />
                <Slt.SalvarBtn type="submit">Salvar</Slt.SalvarBtn>
            </form>
        </Slt.MainContainer>   
    )
    
    }