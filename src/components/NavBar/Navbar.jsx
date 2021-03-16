import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';

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
                        <img src={"https://i.ibb.co/2WLm1My/53078607-2630694290291910-8889152933308923904-o.png"}
                             alt={"Brand Logo"} height="25px" className={classes.image}/>
                        TY Studio · Concept Tee
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname !== "/cart" && location.pathname !== "/checkout" && location.pathname !== "/" ? (
                        <div className={classes.button}>
                            {/*<IconButton component={Link} to={"/cart"} aria-label="Show cart items" color={"inherit"}>
                                <Badge badgeContent={totalItems} color={"secondary"}>
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>*/}
                            <IconButton onClick={()=>window.open('https://www.facebook.com/NagaworldINT', '_blank')}>
                                <FacebookIcon/>
                            </IconButton>

                        </div>) : (null)}


                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;