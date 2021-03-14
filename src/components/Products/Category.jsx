import React,{useState,useEffect} from 'react';
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import {commerce} from "../../lib/commerce";
import Product from "./Product/Product";
import makeStyles from "./styles";


const Category = ({category,onAddToCart}) => {
    const [products,setProducts] = useState([]);
    const categorySlug = [category.slug];

    const fetchProduct = async () =>{
        const {data} = await commerce.products.list({category_slug:categorySlug});
        console.log("data",data)
        setProducts(data);
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    const classes = makeStyles();

    console.log("Products",products)
    console.log("Category",category)
    return (
        <div>
            <main className={classes.content}>
                <Typography style={{textAlign:"center",marginTop:"80px"}} variant={"h3"}>{category.name}</Typography>
                <Divider/>

                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>

                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product duct product={product} onAddToCart={onAddToCart} categories/>
                    </Grid>
                ))}
                </Grid>
            </main>

        </div>
    );
};

export default Category;
