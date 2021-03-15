import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:"900px",
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
        paddingTop:"80%",
        width:"30",
    }
}))

const MainContent = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Paper variant={"elevation"}>
                    <div className={classes.space}/>
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
                        <Grid container spacing={6} direction={"row"} justify={"center"}>
                            <Grid item xs={9} md={3} lg={3}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.ibb.co/ZTypZ08/sahil-pandita-bs-Dlc-Gg9-Nh4-unsplash.jpg"
                                            title={"Festivals"}/>
                                        <CardContent>
                                            <Typography variant={"h6"}>Festivals</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={9} md={3} lg={3}>
                                <div className={classes.space}/>

                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.ibb.co/sKqPKDk/jeremy-wong-weddings-464ps-n-Oflw-unsplash.webp"
                                            title={"Weddings"}/>
                                        <CardContent>
                                            <Typography style={{}} variant={"h6"}>Weddings</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={9} md={3} lg={3}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            title={"Festivals"}/>
                                        <CardContent>
                                            <Typography variant={"h6"}>Customs</Typography>
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
                        <div className={classes.space}/>
                        <div className={classes.space}/>

                    </Container>
                </Paper>

            </div>
        </>
    );
};

export default MainContent;
