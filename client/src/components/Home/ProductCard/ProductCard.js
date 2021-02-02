import React from 'react';
import {Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import * as constantImages from '../../../constants/base64Images';
import useStyles from './styles';

function ProductCard({ title, price, image }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.card_media}
                image={image || constantImages.DEFAULT_IMAGE}
                title="Product Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    <strong>{price} €</strong>
                </Typography>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard
