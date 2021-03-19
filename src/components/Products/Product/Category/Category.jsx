import React, {useEffect} from 'react';
import { Typography, Fab } from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import makeStyles from "../../styles";
import Tab from "./Tab"


const Category = ({categories,darkMode,indexValue}) => {
    const classes = makeStyles();

    useEffect(()=>(
        window.scrollTo(0,0)
    ),[])

    const handleBack = () =>{
        window.location.href = "/"
        /*if (window.history.back() === `%PUBLIC_URL%/category/${indexValue}`){
            window.history.go()
        }else{
            window.history.back()
        }*/
    }

/*    console.log("Products", products)*/
    // console.log("Category", category)
    return (
        <>
        <Fab size={"medium"} className={classes.button} onClick={()=>handleBack()}>
            <KeyboardBackspaceIcon />
        </Fab>
            <main className={classes.content}>
                <Typography className={classes.title} variant={"h3"}>Category</Typography>

                <div className={classes.toolbar}/>
                <div className={classes.space}>
                    <Tab categories={categories} indexValue={indexValue} darkMode={darkMode}/>
                </div>

            </main>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </>
    );
};

export default Category;
