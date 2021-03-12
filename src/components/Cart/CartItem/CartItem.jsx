import React from 'react';
import {Typography,Button ,Card,CardActions,CardContent,CardMedia} from "@material-ui/core";

import useStyles from "./styles"

const MyComponent = ({item,handleRemoveCartQuantity,handleUpdateCartQuantity}) => {
    const classes = useStyles()

    return (
        <Card>
            <CardMedia image={item.media.source} className={classes.media} title={item.name}/>
            <CardContent className={classes.cardContent}>
                <Typography variant={"h5"}>{item.name}</Typography>
                <Typography variant={"h6"}>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type={"button"} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity-1)} size={"small"} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type={"button"} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity+1)} size={"small"} >+</Button>
                </div>
                <Button variant={"contained"} type={"button"} className={classes.remove} onClick={()=>handleRemoveCartQuantity(item.id)} color={"secondary"}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default MyComponent;
