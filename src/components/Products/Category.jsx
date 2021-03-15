import React, {useState, useEffect} from 'react';
import {Divider, Grid, Typography, CircularProgress, Fab} from "@material-ui/core";
import {commerce} from "../../lib/commerce";
import Product from "./Product/Product";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import makeStyles from "./styles";


const Category = ({category, onAddToCart}) => {
    const [products, setProducts] = useState([]);
    const [done,setDone] = useState(false);
    const categorySlug = [category.slug];

    const fetchProduct = async () => {
        const {data} = await commerce.products.list({category_slug: categorySlug});
        console.log("data", data)
        setDone(true)
        setProducts(data);
    }

    const handleBack = () =>{
        window.history.back()
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    const classes = makeStyles();

    console.log("Products", products)
    console.log("Category", category)
    return (
        <>
            <Fab size={"medium"} style={{margin:"5% 2.2%",position:"fixed",padding:"15px 10px",borderRadius:"15%"}} onClick={()=>handleBack()}>
                <KeyboardBackspaceIcon />
            </Fab>
            <main className={classes.content}>
                <Typography style={{textAlign: "center",padding:"20px 0", fontWeight:400,fontFamily:"'Noto Sans SC', sans-serif", marginTop: "80px"}} variant={"h3"}>{category.name}</Typography>
                <Divider/>

                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4}>
                    {!done?(
                        <div style={{marginTop:"5%"}}>
                            <CircularProgress color={"primary"}/>
                        </div>
                    ):(
                        <>
                            {products.map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product duct product={product} onAddToCart={onAddToCart} categories/>
                                </Grid>
                            ))}
                        </>

                    )}

                </Grid>
            </main>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
};

export default Category;
