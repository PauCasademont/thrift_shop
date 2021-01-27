import swal from 'sweetalert';

import * as api from '../api/index.js';

export const signUp = async (form, router) => {

    if (form.password !== form.password2){
        swal({
            title: "Error",
            text: "Passwords do not match",
            icon: "error"
        });       
    }
    else {
        try{
            await api.req_singUp(form);                    
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
}; 