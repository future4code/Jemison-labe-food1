import axios from "axios";

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4A'


export const Login = async (body) =>{ 
const {data} = await axios.post (`${BASE_URL}/login`, body);
return data;
}

export const SignUp = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/signup`, body);
    return data;
}

export const validateName = (name, length = 2) => new RegExp(`.{${length},}`).test(name);
export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validateCpf = cpf => /[0-9]{3}[.0-9]{3}[.0-9]{3}[-0-9]{2}?/.test(cpf);
export const validatePassword = password => /.{6,}/.test(password);

export const CheckPassword =((password, confirmPass)=>{
    return password === confirmPass    
})


