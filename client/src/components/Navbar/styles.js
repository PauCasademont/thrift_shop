import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    appBar: {
        borderRadius: 15,
        padding: '10px 30px',
        margin: '20px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D5F5E3',
    },
    image: {
        height: '55px',
        width: '200px'
    },
    formControl: {      
        width: '25%',
        marginLeft: '-200px'
    },
    avatar: {        
        backgroundColor: '#FC711C',
        width: '50px',
        height: '50px'
    }
}));