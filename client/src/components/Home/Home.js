import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { getProducts } from '../../actions/product';
import ProductCard from '../product/ProductCard/ProductCard';
import useStyles from './styles';

function Home() {
    const [products, setProducts] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        getProducts().then((res) => {setProducts(res.data)})
                     .catch((error) => {console.log(error)});    
    },[]);

    return (
        <div className={classes.home}>
            {!products ? <CircularProgress /> : (
                <Grid className={classes.container} container spacing={6} >
                    {products.map((product) => (
                        <Grid item key={product._id} xs={6} sm={4} md={3} >
                                <ProductCard product={product} home={true} />            
                        </Grid>
                    ))}                
                </Grid>        
            )}
        </div>   
    )
}

export default Home
