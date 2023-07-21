import {
    FormControl,
    FormErrorMessage,
    InputRightElement,
    InputGroup,
    IconButton,
  } from '@chakra-ui/react';
import { useState } from 'react';
import ShowPassword from '../../assets/show.png';
import HidePassword from '../..//assets/hide.png';

export const PassConfirmInput = ({ isValid, value, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);
    const onClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <FormControl isInvalid={!isValid}>
            <pre>Confirmar* </pre>
            <InputGroup size='md'>
                <input
                    name="confirmPass"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Digite a senha novamente'
                />
                <InputRightElement width='4.5rem'>
                    <IconButton variant='untyled'
                        icon={showPassword ? <img src={ShowPassword}/> : <img src={HidePassword}/>}
                        marginTop='30px' 
                        h='1.75rem' 
                        size='sm' 
                        onClick={onClickShowPassword} 
                    />
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as="p">
                   Deve ser a mesma que a anterior
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}