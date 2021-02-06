import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    card: {       
        cursor: 'pointer'
    },
    card_home:{
        height: '250px',
        width: '95%'
    },
    card_row:{    
        display: 'flex',
        height: '150px',
        cursor: 'pointer'
    },
    image_height: {
        height: '60%'
    },
    image_width: {
        width: '25%'
    },
    details: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    price: {
        width: '25%',
        marginLeft: theme.spacing(2)
    },
    title: {
        width: '40%',
        marginRight: '15%'
    },
    btn_edit: {
        marginRight: '5%'
    },
    btn_delete: {
        marginRight: '3%'
    }
}));