import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { getProducts } from '../../actions/product';
import ProductCard from './ProductCard/ProductCard';
import useStyles from './styles';

function Home() {
    const [products, setProducts] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        getProducts().then((res) => {setProducts(res.data)});     
    },[]);

    return (
        <div className={classes.home}>
            {!products ? <CircularProgress /> : (
                <Grid className={classes.container} container spacing={6} >
                    {products.map((product) => (
                        <Grid item key={product._id} xs={3} >
                            <ProductCard title={product.title} price={product.price} image={product.image}/>             
                        </Grid>
                    ))}                
                </Grid>        
            )}
        </div>   
    )
}

export default Home
