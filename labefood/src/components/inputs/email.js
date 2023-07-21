import {
    FormControl, 
    FormErrorMessage,
} from '@chakra-ui/react';

export const EmailInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <pre>E-mail*   </pre>
            <input
                name="email"
                value={value}
                onChange={onChange}
                placeholder="email@email.com"
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    E-mail inválido.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}