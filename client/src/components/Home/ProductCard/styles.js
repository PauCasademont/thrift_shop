import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    card: {
        height: '250px',
        width: '95%',
        cursor: 'pointer',
    },
    card_media: {
        height: '60%',
    },
    info: {
        marginTop: theme.spacing(1)        
    }
}));