import React, { useState } from 'react'
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const initialState = { title: '', description: '', price: 0, image: '', owner: ''}

function CreateProduct() {
    const [form, setForm] = useState(initialState);
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleSetFile = ({ base64 }) => {
        console.log('File:', base64);
    }

    return (
       <Container maxWidth="sm">
           <Paper elevation={3}>
               <form className={classes.paper} onSubmit={handleSubmit}>
                    <Grid container spacing={5} direction="column"  justify="center">
                        <Grid item xs={12}>
                            <TextField 
                                name="title"
                                onChange={handleChange}
                                value={form.title}
                                required fullWidth
                                label="Product Name"
                                autoFocus
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="description"
                                onChange={handleChange}
                                value={form.description}
                                required fullWidth
                                label="Description"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="price"
                                onChange={handleChange}
                                value={form.price}
                                required fullWidth
                                label="Price"
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} direction="column" alignItems="center"  justify="center">
                        <Grid item xs={12}>
                            <div className={classes.filebase}>
                                <FileBase className={classes.filebase} type="file" multiple={false} onDone={handleSetFile}/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">Add Product</Button>
                        </Grid>
                    </Grid>
               </form>
           </Paper>
       </Container>
    )
}

export default CreateProduct
