import React, {useEffect} from 'react';
import { Typography } from "@material-ui/core";
import makeStyles from "../../styles";
import Tab from "./Tab"


const Category = ({categories,darkMode,indexValue}) => {
    const classes = makeStyles();

    useEffect(()=>(
        window.scrollTo(0,0)
    ),[])

/*    console.log("Products", products)*/
    // console.log("Category", category)
    return (
        <>
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
