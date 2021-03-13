//rsc
import React from 'react';
import {Link} from "react-router-dom"
import {Container, Typography, Button, Grid,CssBaseline} from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({cart,handleUpdateCartQuantity,handleRemoveCartQuantity,handleEmptyCart}) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <Typography variant={"subtitle1"}> You have no item in your shopping cart,<Link to={"/"} className={classes.link}>start adding some</Link>!  </Typography>)

    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveCartQuantity={handleRemoveCartQuantity}/>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant={"h4"}>
                        Subtotal : {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} onClick={()=>handleEmptyCart()} size={"large"} type={"button"} variant={"contained"}
                                color={"secondary"}>Empty Cart</Button>
                        <Button className={classes.checkoutButton} size={"large"} component={Link} to={"/checkout"} type={"button"} variant={"contained"}
                                color={"primary"}>Checkout</Button>
                    </div>
                </div>
            </>
        )
    }

    if (!cart.line_items) return (
        <Container>
            <Typography className={classes.loading} variant={"h3"}>Loading...</Typography>
        </Container>)

    return (
        <div>
            <CssBaseline/>
            <Container>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant={"h3"} gutterBottom>Your Shopping Cart</Typography>
                {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
            </Container>
        </div>
    );
};

export default Cart;
