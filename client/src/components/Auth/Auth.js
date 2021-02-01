import React, { useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { signUp, signIn } from '../../actions/auth';
import useStyles from './styles';

const initialState = { username: '', password: '', password2: '' };

function Auth({ registering, setRegistering, setUser }) {
    const [form, setForm] = useState(initialState);
    const classes = useStyles();
    const router = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();  
        registering ? signUp(form, setUser, router) : signIn(form, setUser, router);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });        
    };

    const handleSwitchMode = () => {
        setForm(initialState);
        setRegistering(!registering);
    }

    return (    
        <Container maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField 
                                name="username" 
                                onChange={handleChange} 
                                value={form.username} 
                                required fullWidth 
                                label="Username" 
                                autoFocus 
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                name="password" 
                                onChange={handleChange} 
                                value={form.password} 
                                required fullWidth 
                                label="Password" 
                                type="password"
                            />
                        </Grid>
                        { registering && <Grid item xs={12}>
                            <TextField 
                                name="password2" 
                                onChange={handleChange} 
                                value={form.password2} 
                                required 
                                fullWidth 
                                label="Repeat Password" 
                                type="password"
                            />
                        </Grid> }
                    </Grid>
                    <Grid container spacing={0} direction="column" justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Button className={classes.button_submit} type="sumbit" variant="contained" color="primary">
                                { registering ? 'Sign Up' : 'Sign In' }
                            </Button>
                        </Grid>                                         
                        <Grid item xs={12}>
                            <Button className={classes.button_switchMode} color="primary" onClick={handleSwitchMode}>
                                { registering ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid> 
                    </Grid> 
                </form>
            </Paper>             
        </Container>
    )
}

export default Auth
