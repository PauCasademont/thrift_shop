import swal from 'sweetalert';

import * as api from '../api/index.js';

const createAlert = (title, text, icon, button) => {
    swal({ title, text, icon, button });
}

export const signUp = async (form, router) => {

    if (form.password !== form.password2){
        createAlert("Error", "Passwords do not match", "error", "ok");      
    }

    else {
        try{
            await api.req_singUp(form);         
            router.push('/');
        } catch (error) {
            console.log(error);
            const message = error.response.data.message || "Something went wrong";
            createAlert("Error", message, "error", "ok"); 
        }
    }
}; 