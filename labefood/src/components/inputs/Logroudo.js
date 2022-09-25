import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const LogroudoInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Logroudo*   </pre>
            <input 
            type="text"
            name='Logroudo'
            value={value}
            placeholder='Endereço'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Endereço inválido.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}