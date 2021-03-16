import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom"
import NewestProduct from "./NewestProduct";
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:"900px",
        ["@media (max-width:800px)"]:{
            paddingTop:"250px",
        }
    },
    Learn:{
        ["@media (max-width:800px)"]:{
            marginLeft:"25px",
        }
    },
    container:{
        height:"100vh",
        paddingTop:"600px",
    },
    text:{
        padding:"20px 20px",
        fontFamily: "'Nunito', sans-serif",
        fontWeight:400,
        textAlign:"center",
    },
    Facebook:{
        padding:"20px 20px",
        fontFamily: "'Nunito', sans-serif",
        fontWeight:400,
    },
    CardText:{
        fontFamily: "'Nunito', sans-serif",
        fontWeight:600,
    },
    grid:{
        display:"flex",
        justifyContent:"center",
    },
    buttonForProducts:{

    },
    space:{
        height:'30px'
    },
    media:{
        height: '0',
        paddingTop:"470px",
        ["@media (max-width:800px)"]:{
            paddingTop:"300px",
        },
        width:"40",
    }
}))

const MainContent = ({latestProduct}) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Paper className={"mainPoint"} variant={"elevation"}>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <Typography className={classes.text} style={{fontSize:"30px"}}  variant={"h6"}>OUR PRODUCTS</Typography>
                    <Grid className={classes.grid} style={{padding:"20px"}}>
                        <Button className={classes.buttonForProducts} component={Link} variant="outlined" to={"/products"}>
                            Find out here
                        </Button>

                    </Grid>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                </Paper>
                <Paper style={{backgroundColor:"#f4fafb",}} variant={"elevation"}>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <Container>
                        <Typography className={classes.text} style={{fontSize:"34px"}}  variant={"h6"}>CATEGORIES</Typography>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <Grid container spacing={4} direction={"row"} justify={"center"}>
                            <Grid item xs={9} md={4} lg={4}>
                                <Card>
                                    <CardActionArea >
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.ibb.co/7zDnGBH/sahil-pandita-bs-Dlc-Gg9-Nh4-unsplash-min.webp"
                                            title={"Festivals"}/>
                                        <CardContent>
                                            <Typography className={classes.CardText} variant={"h6"}>Festivals</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={9} md={4} lg={4}>
                                <div className={classes.space}/>
                                <div className={classes.space}/>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.ibb.co/sKqPKDk/jeremy-wong-weddings-464ps-n-Oflw-unsplash.webp"
                                            title={"Weddings"}/>
                                        <CardContent>
                                            <Typography className={classes.CardText} variant={"h6"}>Weddings</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <div className={classes.space}/>
                                <div className={classes.space}/>
                            </Grid>
                            <Grid item xs={9} md={4} lg={4}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            title={"Customs"}/>
                                        <CardContent>
                                            <Typography className={classes.CardText} variant={"h6"}>Customs</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                    </Container>
                </Paper>
                    <NewestProduct latestProduct={latestProduct}/>
                    <Paper style={{backgroundColor:"#f4fafb",}} variant={"elevation"} >
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <Grid container justify={"center"} spacing={7} >
                            <Grid item className={classes.Learn}>
                                <Typography className={classes.Facebook} variant={"h4"}>Like us now on <span><FacebookIcon style={{fontSize:"90%"}}/> </span> Facebook <br/> for more updates </Typography>
                                <Button variant={"outlined"} onClick={()=>window.open('https://www.facebook.com/NagaworldINT', '_blank')} style={{marginLeft:"20px",padding:"10px 15px"}}>
                                    <Typography variant={"body1"}>Learn More</Typography>
                                    <ArrowRightAltIcon />
                                </Button>
                            </Grid>
                        </Grid>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                    </Paper>
            </div>
        </>
    );
};

export default MainContent;
