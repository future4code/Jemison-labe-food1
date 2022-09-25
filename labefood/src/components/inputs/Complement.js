import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const ComplementoInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Complemento*   </pre>
            <input 
            type="text"
            name='Complemento'
            value={value}
            placeholder='Apto./Bloco'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Insira Complemento.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}