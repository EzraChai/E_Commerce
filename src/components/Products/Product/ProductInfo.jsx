import React, {useEffect, useState} from 'react';
import {Backdrop, Box, Button, Card, CardContent, Container, Grid, IconButton, Paper, Tooltip, Typography,} from "@material-ui/core";
import useStyles from "./styles";
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
    const [fourthPicture, setFourthPicture] = useState()
    const [fifthPicture, setFifthPicture] = useState()
    const [isAPhone, setIsAPhone] = useState(false)
    const [firstPictureClicked, setFirstPictureClicked] = useState(false)
    const [secondPictureClicked, setSecondPictureClicked] = useState(false)
    const [thirdPictureClicked, setThirdPictureClicked] = useState(false)
    const [fourthPictureClicked, setFourthPictureClicked] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const Qrcode = () => {
        if (isAPhone) {
            return <></>
        }
        return (
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
        )
    }


    useEffect(() => {
        window.scrollTo(0, 0);
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setIsAPhone(true)
        }
        if (product.assets[2]) {
            setSecondPicture(product.assets[1].url)
            setThirdPicture(product.assets[2].url)
        }
        if (product.assets[3]) {
            setFourthPicture(product.assets[3].url)
        }
        if (product.assets[4]) {
            setFifthPicture(product.assets[4].url)
        }
    }, [product.assets])

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
            setFourthPicture(thirdPictureClicked ? fourthPicture : currentPicture)
        } else {
            setCurrentPicture(thirdPictureClicked ? fourthPicture : currentPicture)
            setFourthPicture(thirdPictureClicked ? currentPicture : fourthPicture)
        }
    }

    const changeImage4 = () => {
        setFourthPictureClicked(!fourthPictureClicked)
        changeFunction4()
    }

    const changeFunction4 = () => {
        if (!fourthPictureClicked) {
            setCurrentPicture(fourthPictureClicked ? currentPicture : fifthPicture)
            setFifthPicture(fourthPictureClicked ? fifthPicture : currentPicture)
        } else {
            setCurrentPicture(fourthPictureClicked ? fifthPicture : currentPicture)
            setFifthPicture(fourthPictureClicked ? currentPicture : fifthPicture)
        }
    }

    const SmallImageComponent = () => {
        if (product.assets[4]) return (
            <div>
                <CardContent>
                    <Grid container justify={"center"} spacing={2}>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage1()}
                                             src={secondPicture} alt={secondPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage1()}
                                     src={secondPicture} alt={secondPicture}/>}
                        </Grid>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage2()}
                                             src={thirdPicture} alt={thirdPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage2()}
                                     src={thirdPicture} alt={thirdPicture}/>}
                        </Grid>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage3()}
                                             src={fourthPicture} alt={fourthPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage3()}
                                     src={fourthPicture} alt={fourthPicture}/>}
                        </Grid>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage4()}
                                             src={fifthPicture} alt={fifthPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage4()}
                                     src={fifthPicture} alt={fifthPicture}/>}
                        </Grid>
                    </Grid>
                </CardContent>
            </div>
        )
        if (product.assets[3]) return (
            <div>
                <CardContent>
                    <Grid container justify={"center"} spacing={2}>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage1()}
                                             src={secondPicture} alt={secondPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage1()}
                                     src={secondPicture} alt={secondPicture}/>}
                        </Grid>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage2()}
                                             src={thirdPicture} alt={thirdPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage2()}
                                     src={thirdPicture} alt={thirdPicture}/>}
                        </Grid>
                        <Grid item xs={4} lg={3} style={{paddingTop: "16px"}}>
                            {isAPhone ? <img className={classes.smallPic} onClick={() => changeImage3()}
                                             src={fourthPicture} alt={fourthPicture}/> :
                                <img className={classes.smallPic} onMouseEnter={() => changeImage3()}
                                     src={fourthPicture} alt={fourthPicture}/>}
                        </Grid>
                    </Grid>
                </CardContent>
            </div>
        )
        if (product.assets[2]) return (
            <div>
                <Grid container justify={"center"} spacing={2}>
                    <Grid item lg={3} style={{paddingTop: "16px"}}>
                        {isAPhone ? <img className={classes.smallPic} onClick={() => changePicture1()}
                                         src={secondPicture} alt={secondPicture}/> :
                            <img className={classes.smallPic} onMouseEnter={() => changePicture1()}
                                 src={secondPicture} alt={secondPicture}/>}
                    </Grid>
                    <Grid item lg={3} style={{paddingTop: "16px"}}>
                        {isAPhone ? <img className={classes.smallPic} onClick={() => changePicture2()}
                                         src={thirdPicture} alt={thirdPicture}/> :
                            <img className={classes.smallPic} onMouseEnter={() => changePicture1()}
                                 src={thirdPicture} alt={thirdPicture}/>}
                    </Grid>
                </Grid>
            </div>
        )
        return <></>
    }


    const ImageComponent = () => {
        if (null === isAPhone) return
        if (isAPhone) return (
            <>
                <img width={"100%"} style={{borderRadius: "2px"}} src={currentPicture}
                     alt={product.name}/>
            </>
        )
        return (
            <div className={classes.zoom} style={{borderRadius: "2px", cursor: "zoom-in"}}>
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

    const BottomButton = () => {
        if (isAPhone) return (
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-end"
                  style={{margin: "30px 2px"}}>
                <Grid item style={{paddingRight: "10px"}}>
                    <Qrcode/>
                    <Button variant={"outlined"} style={{paddingRight: "17px"}} onClick={() => {shopeeClicked()}}>
                        <Grid container alignItems={"center"}>
                            <Grid item>
                                <Grid container justify={"center"} alignItems={"center"}>
                                    <Typography style={{padding: "8px", marginBottom: "5px"}}>Buy
                                        now at <span>
                                            <img style={{width: "20px", height: "20px", marginTop: "5px"}}
                                                          src="https://i.ibb.co/1Rv8jVP/shopee-bag-logo-free-transparent-icon-17.png"
                                                          alt="Shopee"/></span><span
                                            style={{color: "#f53e2d"}}>Shopee</span></Typography>
                                    <ArrowRightAltIcon style={{marginTop: "0px"}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        )
        return (
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
                                <Grid container justify={"center"} alignItems={"center"}>
                                    <Typography style={{padding: "8px", marginBottom: "5px"}}>Buy
                                        now at <span><img style={{
                                            width: "20px",
                                            height: "20px",
                                            marginTop: "5px"
                                        }}
                                                          src="https://i.ibb.co/1Rv8jVP/shopee-bag-logo-free-transparent-icon-17.png"
                                                          alt="Shopee"/></span><span
                                            style={{color: "#f53e2d"}}>Shopee</span></Typography>
                                    <ArrowRightAltIcon style={{marginTop: "0px"}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Container>
                <div className="classes.toolbar"/>
                <Paper style={{marginTop: "10vh"}} className={"classes.paper"} elevation={3}>
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
                                                style={{float: "right", paddingRight: "10px"}}>{product.price.formatted_with_symbol}</Typography>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Typography dangerouslySetInnerHTML={{__html: product.description}}
                                                variant={"body1"}/>
                                    <br/>
                                    <BottomButton/>
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
    )
}

export default React.memo(ProductInfo);
