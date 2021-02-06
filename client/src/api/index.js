import axios from 'axios';

const url = 'http://localhost:5000'

export const req_signUp = (form) => axios.post(`${url}/user/signup`, form);
export const req_signIn = (form) => axios.post(`${url}/user/signin`, form);

export const req_createProduct = (form) => axios.post(`${url}/products`, form);
export const req_getProducts = () => axios.get(`${url}/products`);
export const req_getUserProducts = (userId) => axios.get(`${url}/products/user/${userId}`);