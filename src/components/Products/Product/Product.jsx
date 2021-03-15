import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom"

import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    console.log("product", product.permalink);
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea component={Link} to={`/product/${product.permalink}`}>
                    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography className={classes.price} style={{padding:"0 8px"}} variant="h6" gutterBottom>
                                {product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                        {/*<Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                                    color="textSecondary"/>*/}
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
                <br/>
        </div>
    );
}

export default Product;