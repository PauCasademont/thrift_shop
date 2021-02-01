import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    paper: {    
        marginTop: theme.spacing(8), 
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    button_submit: {
        marginTop: theme.spacing(5),        
    },
    button_switchMode: {
        marginTop: theme.spacing(3), 
    }
}));