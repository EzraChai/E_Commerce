import React, {useEffect, useState} from 'react';
import {
    Typography,
    Paper,
    Container,
    Grid,
    Button,
    Spacing,
    Box,
    Fab, IconButton, Tooltip, Backdrop, CardContent, Card,
} from "@material-ui/core";
import useStyles from "./styles";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Zoom from 'react-img-zoom';
import QRCode from 'qrcode.react';
import QrcodeIcon from "../../../assets/240_F_318609669_pSBN7cX4iPhfoT7ujWHr4QDqzQQIRed7-removebg-preview.png";

const ProductInfo = ({product, darkMode}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(product.media.source)
    const [secondPicture, setSecondPicture] = useState()
    const [thirdPicture, setThirdPicture] = useState()
    const [fourthPicture, setfourthPicture] = useState()
    const [firstPictureClicked, setFirstPictureClicked] = useState(false)
    const [secondPictureClicked, setSecondPictureClicked] = useState(false)
    const [thirdPictureClicked, setThirdPictureClicked] = useState(false)

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
                        <IconButton style={{marginRight: "10px"}} onClick={handleToggle}>
                            <img style={{
                                width: "52px",
                                height: "52px",
                                filter: darkMode ? "invert(100%)" : "",
                                WebkitFilter: darkMode ? "invert(100%)" : "" /* Safari/Chrome */
                            }} src={QrcodeIcon} alt="qrcode"/>
                        </IconButton>
                    </Tooltip>
                </>

            )
        }
    }
    /*const [quantity, setQuantity] = React.useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };*/

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product.assets[2]) {
            setSecondPicture(product.assets[1].url)
            setThirdPicture(product.assets[2].url)
        }
        if (product.assets[3]) {
            setfourthPicture(product.assets[3].url)
            console.log(product.assets[3])
        }
    }, [])

    const shopeeClicked = () => {
        window.open(`https://shopee.com.my/${product.sku}`, "_blank");
    }

    const changePicture1 = () => {
        setFirstPictureClicked(!firstPictureClicked)
        changeFunction()
    }

    const changePicture2 = () => {
        setSecondPictureClicked(!secondPictureClicked)
        changeFunction2()
    }

    const changeImage1 = () => {
        setFirstPictureClicked(!firstPictureClicked)
        changeFunction()
    }
    const changeFunction = () => {
        if (firstPictureClicked) {
            setCurrentPicture(firstPictureClicked ? secondPicture : currentPicture)
            setSecondPicture(firstPictureClicked ? currentPicture : secondPicture)
        } else {
            setCurrentPicture(firstPictureClicked ? currentPicture : secondPicture)
            setSecondPicture(firstPictureClicked ? secondPicture : currentPicture)
        }
    }

    const changeImage2 = () => {
        setSecondPictureClicked(!secondPictureClicked)
        changeFunction2()
    }

    const changeFunction2 = () => {
        if (!secondPictureClicked) {
            setCurrentPicture(secondPictureClicked ? currentPicture : thirdPicture)
            setThirdPicture(secondPictureClicked ? thirdPicture : currentPicture)
        } else {
            setCurrentPicture(secondPictureClicked ? thirdPicture : currentPicture)
            setThirdPicture(secondPictureClicked ? currentPicture : thirdPicture)
        }
    }

    const changeImage3 = () => {
        setThirdPictureClicked(!thirdPictureClicked)
        changeFunction3()
    }

    const changeFunction3 = () => {
        if (!thirdPictureClicked) {
            setCurrentPicture(thirdPictureClicked ? currentPicture : fourthPicture)
            setfourthPicture(thirdPictureClicked ? fourthPicture : currentPicture)
        } else {
            setCurrentPicture(thirdPictureClicked ? fourthPicture : currentPicture)
            setfourthPicture(thirdPictureClicked ? currentPicture : fourthPicture)
        }
    }

    const SmallImageComponent = () => {
        if (product.assets[3]) {
            return (
                <div>
                    <CardContent>
                        <Grid container justify={"center"} spacing={2}>
                            <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                                <img className={classes.smallPic} onMouseEnter={() => changeImage1()}
                                     src={secondPicture} alt={secondPicture}/>
                            </Grid>
                            <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                                <img className={classes.smallPic} onMouseEnter={() => changeImage2()}
                                     src={thirdPicture} alt={thirdPicture}/>
                            </Grid>
                            <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                                <img className={classes.smallPic} onMouseEnter={() => changeImage3()}
                                     src={fourthPicture} alt={fourthPicture}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>
            )
        } else if (product.assets[2]) {
            return (
                <div>
                    <Grid container justify={"center"} spacing={2}>
                        <Grid item lg={3} style={{paddingTop: "16px"}}>
                            <img className={classes.smallPic} onClick={() => changePicture1()}
                                 src={secondPicture} alt={secondPicture}/>
                        </Grid>
                        <Grid item lg={3} style={{paddingTop: "16px"}}>
                            <img className={classes.smallPic} onClick={() => changePicture2()}
                                 src={thirdPicture} alt={thirdPicture}/>
                        </Grid>
                    </Grid>
                </div>
            )
        }else{
            return (<></>)
        }
    }

    const ImageComponent = () => {
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // some code..
            return (
                <>
                    <img width={"100%"} style={{borderRadius: "2px"}} src={currentPicture}
                         alt={product.name}/>
                </>
            )
        } else {
            return (
                <div style={{borderRadius: "2px"}}>
                    <Zoom
                        img={currentPicture}
                        zoomScale={3}
                        width={550}
                        height={550}
                        transitionTime={0.5}
                    />
                </div>
            )
        }
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
                                <Card variant="outlined" style={{maxWidth: 550,}}>
                                    <ImageComponent/>
                                    <SmallImageComponent/>
                                </Card>
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
                                        <Grid item style={{paddingRight: "10px"}}>
                                            <Qrcode/>
                                            <Button variant={"outlined"} style={{paddingRight: "17px"}} onClick={() => {
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
            <Backdrop style={{zIndex: 10, color: '#fff',}} open={open} onClick={handleClose}>
                <QRCode value={`https://shopee.com.my/${product.sku}`} size={256} includeMargin={true}
                        style={{borderRadius: "10%"}}/>
            </Backdrop>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </>
    );
};

export default ProductInfo;
