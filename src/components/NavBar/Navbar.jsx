import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom"

import {ShoppingCart} from "@material-ui/icons"

import useStyles from './styles';

function Navbar({totalItems}) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div>
            <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
                <Toolbar>
                    <Typography component={Link} to={"/"} variant={"h6"} className={classes.title} color={"inherit"}>
                        <img src={"https://i.pinimg.com/originals/66/f7/72/66f77296282b5ab7c2780724802614c0.png"}
                             alt={"Brand Logo"} height="25px" className={classes.image}/>
                        Ezra Commerce Store
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname !== "/cart" && location.pathname !== "/checkout" ? (
                        <div className={classes.button}>
                            <IconButton component={Link} to={"/cart"} aria-label="Show cart items" color={"inherit"}>
                                <Badge badgeContent={totalItems} color={"secondary"}>
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>) : (null)}


                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;