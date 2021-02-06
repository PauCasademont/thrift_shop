import React from 'react';
import {Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import * as constantImages from '../../../constants/base64Images';
import useStyles from './styles';

function ProductCard({ product, home=false }) {
    const classes = useStyles();
    const { title, price, image } = product;
    const classesCard = classes.card + ' ' + (home ? classes.card_home : classes.card_row);
    const classesImage = home ? classes.image_height : classes.image_width;

    return (
        <Card className={classesCard}>
            <CardMedia
                className={classesImage}
                image={image || constantImages.DEFAULT_IMAGE}
                title="Product Image"
            />            
            <CardContent className={home ? '' : classes.details}>
                <div className={home ? '' : classes.price} >
                    <Typography gutterBottom variant="h5">
                        <strong>{price} €</strong>
                    </Typography>
                </div>
                <div className={home ? '' : classes.title} >
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                </div>
                { !home && <Button className={classes.btn_edit} variant="contained" color="primary" startIcon={<Edit/>}>
                    Edit 
                </Button>}
                { !home && <Button className={classes.btn_delete} variant="contained" color="secondary" startIcon={<Delete/>}>
                    Delete 
                </Button>}
            </CardContent>          
        </Card>
    )
}

export default ProductCard
