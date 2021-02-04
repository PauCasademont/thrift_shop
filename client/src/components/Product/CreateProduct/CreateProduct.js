import React, { useState } from 'react'
import { Container, Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { uploadProduct } from '../../../actions/product';
import useStyles from './styles';
import * as prodCat from '../../../constants/productCategories';


const initialState = { title: '', description: '', price: 0, category: '', image: ''}
const categories = [prodCat.ALL_PRODUCTS, prodCat.SPORT, prodCat.TECHNOLOGY, prodCat.CLOTHES];

function CreateProduct({ user }) {
    const [form, setForm] = useState(initialState);
    const classes = useStyles();
    const router = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        uploadProduct(form, user, router);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });        
    };

    const handleSetFile = ({ base64 }) => {
        setForm({...form, image: base64 })
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
                            <NumberFormat
                                className={classes.number_format}
                                name="price"
                                value={form.price}
                                required
                                onChange={handleChange}
                                thousandSeparator
                                suffix=" €"
                                isNumericString
                                allowNegative={false}
                                decimalScale={2}
                                fixedDecimalScale={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.form_control} required>
                                <InputLabel id="selectInputLabel">Category</InputLabel>
                                <Select labelId="selectInputLabel" name="category" value={form.category} onChange={handleChange}>
                                    {categories.map((category, index) => (
                                        <MenuItem key={index} value={category}>{category}</MenuItem>
                                    ))} 
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} direction="column" alignItems="center"  justify="center">
                        <Grid item xs={12}>
                            <div className={classes.file_base}>
                                <FileBase type="file" multiple={false} onDone={handleSetFile}/>
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
