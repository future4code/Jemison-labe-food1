import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const NumeroInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Número*   </pre>
            <input 
            type="text"
            name='Numero'
            value={value}
            placeholder='Numero'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Insira apenas numeros.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}