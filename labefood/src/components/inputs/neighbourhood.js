import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const BairroInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Bairro*   </pre>
            <input 
            type="text"
            name='Bairro'
            value={value}
            placeholder='Bairro'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Insira o Bairro.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}