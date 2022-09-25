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

export const PasswordInput = ({ isValid, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const onClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <FormControl isInvalid={!isValid}>
            <pre>Senha*    </pre>
            <InputGroup size='md'>
                <input
                    name="password"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Mínimo 6 caracteres'
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
                    A senha deve conter ao menos 6 caracteres
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}