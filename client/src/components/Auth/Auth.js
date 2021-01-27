import React, { useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../actions/auth';
import useStyles from './styles';

function Auth() {
    const [form, setForm] = useState({ username: '', password: '', password2: '' });
    const classes = useStyles();
    const router = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();       
        signUp(form, router);        
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });        
    };

    return (    
        <Container maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField name="username" onChange={handleChange} required fullWidth label="Username" autoFocus type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" onChange={handleChange} required fullWidth label="Password" type="password"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password2" onChange={handleChange} required fullWidth label="Repeat Password" type="password"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={3}>
                            <Button className={classes.button} type="sumbit" variant="contained" color="primary">
                                Sing Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>             
        </Container>
    )
}

export default Auth
