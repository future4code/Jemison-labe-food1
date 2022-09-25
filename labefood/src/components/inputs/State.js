import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const EstadoInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Estado*   </pre>
            <input 
            type="text"
            name='Estado'
            value={value}
            placeholder='Estado'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Insira o Estado.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}