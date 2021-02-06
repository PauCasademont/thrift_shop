import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

import useStyles from './styles';
import * as constantImages from '../../../constants/base64Images';

function ProductItem({ image }) {
    const calsses = useStyles();

    return (
        <Card>
            <CardMedia 
                image={}
        </Card>
    )
}

// return (
//     <Card className={classes.card}>
//         <CardMedia
//             className={classes.card_media}
//             image={image || constantImages.DEFAULT_IMAGE}
//             title="Product Image"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5">
//                 <strong>{price} €</strong>
//             </Typography>
//             <Typography gutterBottom variant="h5">
//                 {title}
//             </Typography>
//         </CardContent>
//     </Card>
// )

export default ProductItem
