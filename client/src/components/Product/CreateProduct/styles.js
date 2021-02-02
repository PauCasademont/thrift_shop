import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    paper: {
        marginTop: theme.spacing(5), 
        padding: theme.spacing(5),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
    },
    filebase: {
        marginTop: theme.spacing(4)        
    }   
}));