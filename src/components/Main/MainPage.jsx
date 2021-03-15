import React, {useEffect, useState} from 'react';
import {Collapse, Divider, IconButton, Typography} from "@material-ui/core";
import {Link} from "react-router-dom"
import {makeStyles, CssBaseline} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MainContent from "./Content"

const useStyles = makeStyles((theme) => ({
    root: {
        scrollBehavior: "smooth",
        minHeight: "100vh",
        backgroundImage: "url('https://i.ibb.co/34kySSK/andrej-lisakov-Yy4s-N6-Qzbo-U-unsplash.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ["@media (max-width:450px)"]:{
            backgroundImage: "url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
            backgroundSize: "140% 30%",
        }
    },

    title: {
        display: "flex",
        justifyContent: "center",
        height: "450px",
        alignItems: "flex-end",
        ["@media (max-width:800px)"]:{
            height: "340px",
        }
    },
    heading: {
        padding:"20px",
        color: "black",
        fontFamily: "'Nunito', sans-serif",
        textAlign: "center",
        ["@media (max-width:800px)"]:{
            fontSize:"72px",
        }
    },
    goDown: {
        color: "black",
        textAlign: "center",

    },
    buttonPress: {
        display: "flex",
        justifyContent: "center",
    }
}))

const MyComponent = () => {
    const [checked,setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true)
    })
    const classes = useStyles();

    const handleClick = () =>{
        document.querySelector('.mainPoint').scrollIntoView({
            behavior: 'smooth'
        });
    }


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Collapse in={checked} {...(checked ? {timeout:1000}:{})} collapsedHeight={100}>
                <div className={classes.title}>
                    <Typography className={classes.heading} variant={"h1"}>TY studio.</Typography>
                </div>
                <div className={classes.buttonPress}>
                    <IconButton onClick={()=>(handleClick())}>
                        <ExpandMoreIcon fontSize={"large"} className={classes.goDown}/>
                    </IconButton>
                </div>
            </Collapse>
                <MainContent/>
        </div>
    );
};

export default MyComponent;
