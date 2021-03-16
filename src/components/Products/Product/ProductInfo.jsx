import React, {useState} from 'react';
import {
    Typography,
    Paper,
    Container,
    Grid,
    Button,
    Spacing,
    Box,
    Fab,
} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import useStyles from "./styles";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const ProductInfo = ({product}) => {
    const classes = useStyles();
    /*const [quantity, setQuantity] = React.useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };*/

    useState(()=>{
        window.scrollTo(0, 0);
    },[])

    const shopeeClicked = () => {
        window.open(`https://shopee.com.my/${product.sku}`,"_blank");
    }

    return (
        <>
            <Fab size="medium" style={{margin: "0 2%", position: "fixed", padding: "15px 10px", borderRadius: "15%"}}
                 onClick={() => window.history.back()}>
                <KeyboardBackspaceIcon/>
            </Fab>

            <Container style={{marginTop: "10vh"}}>
                <div className="classes.toolbar"/>
                <Paper className={"classes.paper"} elevation={3}>
                    <Box p={3}>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={6}>
                                <img width={"100%"} style={{borderRadius: "2px"}} src={product.media.source}
                                     alt={product.name}/>
                            </Grid>
                            <Grid container justify={"center"} item xs={12} sm={12} md={6}>
                                <Grid item>
                                    <Typography className={classes.title} style={{paddingTop: "5px"}} variant={"h4"}
                                                gutterBottom>{product.name}
                                    </Typography>
                                    <Typography variant={"h5"}
                                                style={{float: "right"}}>{product.price.formatted_with_symbol}</Typography>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Typography dangerouslySetInnerHTML={{__html: product.description}}
                                                variant={"body1"}/>
                                    <br/>
                                    <Grid container
                                          direction="row"
                                          justify="flex-end"
                                          alignItems="flex-end"
                                          style={{margin: "30px 2px"}}>
                                        <Grid item style={{paddingRight:"10px"}}>
                                            <Button variant={"outlined"} style={{paddingRight:"17px"}} onClick={() => {
                                                shopeeClicked()
                                            }}>
                                                <Grid container alignItems={"center"}>
                                                    <Grid item>
                                                        <Typography style={{padding: "8px", marginBottom: "5px"}}>Buy
                                                            now at <span
                                                                style={{color: "#f53e2d"}}>Shopee</span></Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <ArrowRightAltIcon/>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </Grid>
                                        {/*<Grid item style={{paddingRight: "25px"}}>
                                            <FormControl style={{minWidth: 100}} variant="filled"
                                                         className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">Quantity</InputLabel>
                                                <Select
                                                    value={quantity}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <Button style={{padding:"15px 10px",paddingRight:"0px"}} variant={"contained"}
                                                    onClick={() => onAddToCart(product.id, quantity)}>
                                                    <AddShoppingCart/>
                                                <Typography style={{paddingLeft:"5px"}} variant={"body1"}>Add To Cart</Typography>
                                                <div style={{marginRight: '15px'}}/>
                                            </Button>
                                        </Grid>*/}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </>
    );
};

export default ProductInfo;
