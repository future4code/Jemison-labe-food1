import {
    FormControl,
    FormErrorMessage,
} from '@chakra-ui/react';

export const CpfInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <pre>CPF*       </pre>
            <input
                name="cpf"
                value={value}
                onChange={onChange}
                placeholder="CPF"
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    CPF inválido.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}