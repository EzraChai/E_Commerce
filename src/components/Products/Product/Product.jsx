import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    CardActionArea, Backdrop, Tooltip,
} from "@material-ui/core";
import {Link} from "react-router-dom"
import QrcodeIcon from "../../../assets/240_F_318609669_pSBN7cX4iPhfoT7ujWHr4QDqzQQIRed7-removebg-preview.png"
import useStyles from './styles';
import QRCode from 'qrcode.react';

const Product = ({product,darkMode}) => {
    const [open, setOpen] = React.useState(false);
    console.log("DarkOMde",darkMode)

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const Qrcode = () => {

        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return (<></>)
        } else {
            return (
                <>
                    <Tooltip title={"Get QR Code"}>
                        <IconButton style={{padding:"0"}} onClick={handleToggle}>
                            <img style={{width:"52px",height:"52px",filter:darkMode?"invert(100%)":"",WebkitFilter: darkMode?"invert(100%)":"" /* Safari/Chrome */}} src={QrcodeIcon} alt="qrcode"/>
                        </IconButton>
                    </Tooltip>
                </>
            )
        }
    }

    const classes = useStyles();
    console.log("product", product.permalink);
    return (
        <div key={product.name}>
            <Card variant={"outlined"} className={classes.root}>
                <CardActionArea component={Link} to={`/product/${product.permalink}`}>
                    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography className={classes.price} style={{padding: "0 8px"}} variant="h6" gutterBottom>
                                {product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                        {/*<Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                                    color="textSecondary"/>*/}
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing className={classes.cardActions}>
                    {/*<IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>*/}
                    <Qrcode/>
                    <Tooltip title={"Buy at Shopee"}>
                        <IconButton onClick={() => {
                            window.open(`https://shopee.com.my/${product.sku}`, "_blank");
                        }}>
                            <img style={{width:"26px",height:"26px"}} src="https://i.ibb.co/1Rv8jVP/shopee-bag-logo-free-transparent-icon-17.png" alt="Shopee"/>
                        </IconButton>
                    </Tooltip>

                </CardActions>
            </Card>
            <Backdrop style={{zIndex: 10, color: '#fff',}} open={open} onClick={handleClose}>
                    <QRCode value={`https://shopee.com.my/${product.sku}`} size={256} includeMargin={true} style={{borderRadius:"10%"}}/>
            </Backdrop>
            <br/>
        </div>
    );
}

export default Product;