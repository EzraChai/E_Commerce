import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia, CssBaseline,
    Grid,
    makeStyles,
    Paper,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    space: {
        height: '30px'
    },
    subtitle: {
        fontWeight: 300,
        textAlign: "center",
        ["@media (max-width:800px)"]: {
            textSize:"16px",
        }
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        ["@media (max-width:800px)"]: {
            display:"block",
        }
    },
    media:{
        height:"400px",
        ["@media (max-width:800px)"]: {
            height:"300px",
        },
        backgroundSize: "cover",
    }
}))

const LatestProduct = ({product,darkMode}) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea component={Link} to={`/product/${product.permalink}`}>
                    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                    <CardContent style={{backgroundColor:darkMode?"#3b3b3b":"white"}}>
                        <div  className={classes.cardContent}>
                            <Typography style={{textAlign:"center"}} variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br/>
        </>
    )
}


const NewestProduct = ({latestProduct,darkMode}) => {
    const classes = useStyles();
    console.log("NewestProduct", latestProduct)
    return (
        <>
            <CssBaseline/>
            <Paper style={{transition: "0.6s"}} elevation={4}>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <Grid container justify={"center"}>
                    <Grid item xs={12}>
                        <Typography className={classes.subtitle} variant={"h4"}>OUR LATEST PRODUCTS</Typography>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                    </Grid>
                    <Grid container justify={"center"} item xs={11} sm={11} md={7} spacing={8}>
                        {latestProduct.map((product) => (
                            <Grid item key={product.id} xs={12} sm={12} md={5} lg={5}>
                                <LatestProduct darkMode={darkMode} product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
            </Paper>
        </>
    );
};

export default NewestProduct;
