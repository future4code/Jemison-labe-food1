
export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4A'

export const validateName = (name, length = 2) => new RegExp(`.{${length},}`).test(name);
export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validateCpf = cpf => /[0-9]{3}[.0-9]{3}[.0-9]{3}[-0-9]{2}?/.test(cpf);
export const validatePassword = password => /.{6,}/.test(password);

export const validateStreet = street =>/[a-zA-Z0-9]{1,}/.test(street);
export const validateNumber = number =>/[a-zA-Z0-9]{1,}/.test(number);
export const validateNeighbourhood = neighbourhood =>/[a-zA-Z0-9]{1,}/.test(neighbourhood);
export const validateCity = city =>/[a-zA-Z0-9]{1,}/.test(city);
export const validateState = state =>/[a-zA-Z0-9]{1,}/.test(state);







