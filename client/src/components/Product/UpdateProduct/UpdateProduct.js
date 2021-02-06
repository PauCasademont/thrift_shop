import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import NumberFormat from 'react-number-format';

import { getProduct } from '../../../actions/product';
import useStyles from './styles';
import * as prodCat from '../../../constants/productCategories';

const initialState = {description: '', price: 0, category: '', image: ''}
const categories = [prodCat.ALL_PRODUCTS, prodCat.SPORT, prodCat.TECHNOLOGY, prodCat.CLOTHES];

function UpdateProduct() {
    const [form, setForm] = useState(initialState);
    const [title, setTitle] = useState(null);    
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        getProduct(id).then((res) => {
                setForm({
                    description: res.data.description,
                    price: res.data.price,
                    category: res.data.category,
                    image: ''
                });
                setTitle(res.data.title);
        })
        .catch((error) => {console.log(error)});
    },[id]);

    const handleUpdate = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });     
    }

    const handleSetFile = ({ base64 }) => {
        setForm({...form, image: base64 })
    }

    return (
        <Container maxWidth="md">
           <Paper elevation={3}>
               <form className={classes.paper} onSubmit={handleUpdate}>
                    <Grid container spacing={5} direction="column"  justify="center">
                        <Grid item xs={12}>
                           
                                <Typography gutterBottom variant="h4"><strong>{title}</strong></Typography>
                            
                        </Grid>
                        <Grid item xs={12} direction="row">
                            
                                <Typography variant="body1">Description:</Typography>
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
                            
                                <Typography variant="body1">Price:</Typography>
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
                        <Grid item xs={12} direction="row">
                            <Typography variant="body1">Category:</Typography>
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
                            <Button type="submit" variant="contained" color="primary">Update</Button>
                        </Grid>
                    </Grid>
               </form>
           </Paper>
       </Container>
    )
}

export default UpdateProduct
