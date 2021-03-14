import React from 'react';
import {
    Typography,
    Paper,
    Container,
    Grid,
    IconButton,
    Button,
    Spacing,
    Box,
    FormControl, Select, MenuItem, InputLabel
} from "@material-ui/core";
import useStyles from "./styles";
import {AddShoppingCart} from "@material-ui/icons";

const ProductInfo = ({product, onAddToCart}) => {
    const classes = useStyles();
    const [quantity, setQuantity] = React.useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    console.log("Info", product)
    return (
        <>
            <Container style={{marginTop: "10vh"}}>
                <div className="classes.toolbar"/>
                <Paper className={"classes.paper"} elevation={3}>
                    <Box p={2}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={12} md={6}>
                                <img width={"100%"} style={{borderRadius: "2px"}} src={product.media.source}
                                     alt={product.name}/>
                            </Grid>
                            <Grid container justify={"center"} item xs={12} sm={12} md={6}>
                                <Grid item>
                                    <Typography className={classes.title} style={{paddingTop: "5px"}} variant={"h4"}
                                                gutterBottom>{product.name}</Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: product.description}}
                                                variant={"body1"}/>
                                    <Grid container
                                          direction="row"
                                          justify="flex-end"
                                          alignItems="flex-end"
                                          style={{margin: "30px 2px"}}>
                                        <Grid item style={{paddingRight: "25px"}}>
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
                                            <Button variant={"contained"}
                                                    onClick={() => onAddToCart(product.id, quantity)}>
                                                <IconButton aria-label="Add to Cart">
                                                    <AddShoppingCart/>
                                                </IconButton>
                                                <Typography variant={"body1"}>Add To Cart</Typography>
                                                <div style={{marginRight: '15px'}}/>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>

        </>
    );
};

export default ProductInfo;
