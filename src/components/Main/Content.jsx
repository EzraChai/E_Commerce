import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    CssBaseline,
    Grid,
    Paper
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom"
import NewestProduct from "./NewestProduct";
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MainCategory from "./MainCategory";



const MainContent = ({latestProduct,darkMode,categories}) => {

    const useStyles = makeStyles((theme) => ({
        root:{
            paddingTop:"900px",
            "@media (max-width:800px)":{
                paddingTop:"250px",
            }
        },
        Learn:{
            "@media (max-width:800px)":{
                marginLeft:"25px",
            }
        },
        text:{
            padding:"20px 20px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight:300,
            textAlign:"center",
        },
        Facebook:{
            padding:"20px 20px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight:300,
        },
        grid:{
            display:"flex",
            justifyContent:"center",
        },
        space:{
            height:'30px'
        },
        bottom:{
            backgroundColor:darkMode?"#3b3b3b":"#f4fafb",
            backgroundImage:darkMode?"":"url('https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize:"cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 76%',
            transition: "0.6s"
        }
    }))


    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <div className={classes.root}>
                <Paper className={"mainPoint"} id={"section1"} style={{transition: "0.6s"}} variant={"elevation"}>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <Typography className={classes.text} style={{fontSize:"30px"}}  variant={"h6"}>OUR PRODUCTS</Typography>
                    <Grid className={classes.grid} style={{padding:"20px"}}>
                        <Button component={Link} variant="outlined" to={"/products"}>
                            Find out here
                        </Button>

                    </Grid>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                </Paper>
                <Paper style={{backgroundColor:darkMode?"#3b3b3b":"#f4fafb",transition: "0.6s"}} variant={"elevation"}>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <div className={classes.space}/>
                    <MainCategory categories={categories}/>
                </Paper>
                    <NewestProduct darkMode={darkMode} latestProduct={latestProduct}/>

                    {/*Problem here*/}
                    <Paper className={classes.bottom} variant={"elevation"} >
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <Grid container justify={"center"} >
                            <Grid item className={classes.Learn}>
                                <Typography className={classes.Facebook} variant={"h4"}>Like us now on <span><FacebookIcon style={{fontSize:"90%"}}/> </span> Facebook <br/> for more updates </Typography>
                                <Button variant={"outlined"} onClick={()=>window.open('https://www.facebook.com/NagaworldINT', '_blank')} style={{marginLeft:"20px",padding:"10px 15px"}}>
                                    <Typography variant={"body1"}>Learn More</Typography>
                                    <ArrowRightAltIcon style={{marginLeft: "5px",paddingBottom:"3px"}}/>
                                </Button>
                            </Grid>
                        </Grid>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                        <div className={classes.space}/>
                    </Paper>
            </div>
        </>
    );
};

export default React.memo(MainContent);
