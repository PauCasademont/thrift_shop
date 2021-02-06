import React, { useState, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';
import { getUserProducts } from '../../../actions/product';
import ProductCard from '../ProductCard/ProductCard';

function UserProducts({ user }) {
    const [products, setProducts] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        if(user){
            getUserProducts(user.id).then((res) => {setProducts(res.data)});
        }
    },[user]);

    return (
        <div className={classes.user_products}>
            { !products ? <CircularProgress/>  : (
                <Grid container spacing={6}>  
                    { products.map((product) => (
                        <Grid item key={product._id} xs={12} >
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default UserProducts
