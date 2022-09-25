import React from 'react'
import { FormControl, FormErrorMessage,  } from '@chakra-ui/react'

export const CidadeInput = ({ isValid, value, onChange}) => {
    return (
        <FormControl>
            <pre> Cidade*   </pre>
            <input 
            type="text"
            name='City'
            value={value}
            placeholder='Cidade'
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Cidade.
                </FormErrorMessage>
            ): undefined}
        </FormControl>
    )
}