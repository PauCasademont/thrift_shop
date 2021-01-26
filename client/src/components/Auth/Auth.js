import React from 'react';
import { Container, Paper, Grid, TextField, Box } from '@material-ui/core';

import useStyles from './styles';

function Auth() {
    const classes = useStyles();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (    
        <Container maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField name="usename" onChange={handleChange} required fullWidth label="Username" autoFocus type="text"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" onChange={handleChange} required fullWidth label="Password" type="password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password2" onChange={handleChange} required fullWidth label="Repeat Password" type="password"/>
                    </Grid>
                </Grid>
            </Paper>             
        </Container>
    )
}

export default Auth
