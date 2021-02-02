import swal from 'sweetalert';
import * as api from '../api/index.js';

const createAlert = (title, text, icon="error", button="ok") => {
    swal({ title, text, icon, button });
}

export const uploadProduct = async (form, user, router) => {

    if (!user) createAlert("Error", "You have to Sign In first"); 
    
    else { 
        const price = parseFloat(form.price.replace(',',''));

        try{    
            await api.req_createProduct({...form, owner: user.id, price});  
            router.push('/');
        } catch (error) {
            console.log(error);
            const message = error.response?.data?.message || "Something went wrong";
            createAlert("Error", message); 
        }
    }
}

export const getProducts =  async () => {
    try {
        return await api.req_getProducts();
    } catch (error){
        console.log(error);
    }
}