import React from 'react';
import {Grid} from '@material-ui/core';

import Product from "./Product/Product";

import makeStyles from "./styles";
/*
const products = [
    {id:1,name:"Shoes",description:"Running Shoes",price:'RM 5',image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9094123f-f624-4f32-9df8-9093bcc4c0ee/flyby-mid-basketball-shoe-Q2Gp58.jpg'},
    {id:2,name:"Apple Macbook ",description:"Apple Mac Book",price: 'RM 10000',image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603332211000'},
]*/

const Products = ({products,onAddToCart}) =>{
    const classes = makeStyles();
    return(
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    {products.map((product)=>(
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product duct product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        )

}

export default Products;