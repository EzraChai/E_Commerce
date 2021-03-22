import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    container:{
        height:"100vh",
        paddingTop:"600px",
    },
    text:{
        padding:"20px 20px",
        fontFamily: "'Nunito', sans-serif",
        fontWeight:300,
        textAlign:"center",
    },
    CardText:{
        fontFamily: "'Nunito', sans-serif",
        fontWeight:400,
    },
    grid:{
        display:"flex",
        justifyContent:"center",
    },
    space:{
        height:'30px'
    },
    media:{
        height: '0',
        paddingTop:"470px",
        "@media (max-width:800px)":{
            paddingTop:"300px",
        },
        width:"40",
    }
}))

const MainCategory = () => {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Typography className={classes.text} style={{fontSize:"34px"}}  variant={"h6"}>CATEGORIES</Typography>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <Grid container spacing={4} direction={"row"} justify={"center"}>
                    <Grid item xs={9} md={4} lg={4}>
                        <Card>
                            <CardActionArea component={Link} to={`/category/2`}>
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

                    {/*Problem here (not smooth) : Problem solved by changing jpg to webp*/}
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
                        <div>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.ibb.co/FKd6qsq/images-unsplash-com-photo-1523381294911-8d3cead13475.webp"
                                        title={"Customs"}/>
                                    <CardContent>
                                        <Typography className={classes.CardText} variant={"h6"}>Customs</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
                <div className={classes.space}/>
            </Container>
        </>
    );
};

export default React.memo(MainCategory);
