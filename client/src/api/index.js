import axios from 'axios';

const url = 'http://localhost:5000'

export const req_singUp = (form) => axios.post(`${url}/user/singup`, form);