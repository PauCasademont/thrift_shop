import swal from 'sweetalert';

import * as api from '../api/index.js';

const createAlert = (title, text, icon="error", button="ok") => {
    swal({ title, text, icon, button });
}

export const signUp = async (form, setUser, router) => {

    if (form.password !== form.password2){
        createAlert("Error", "Passwords do not match");      
    }

    else {
        try{
            const {data: { result: { _id, username}}} =  await api.req_signUp(form);  
            setUser({id: _id, username });  
            router.push('/');
        } catch (error) {
            console.log(error);
            const message = error.response?.data?.message || "Something went wrong";
            createAlert("Error", message); 
        }
    }
}; 

export const signIn = async (form, setUser, router) => {
 
    try{
        const {data: { result: { _id, username}}} =  await api.req_signIn(form);  
        setUser({id: _id, username });  
        router.push('/');
    } catch (error) {
        console.log(error);
        const message = error.response?.data?.message || "Something went wrong";
        createAlert("Error", message); 
    }
    
}; 