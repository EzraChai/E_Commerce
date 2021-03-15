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
    },
    title: {
        display: "flex",
        justifyContent: "center",
        height: "450px",
        alignItems: "flex-end",
    },
    heading: {
        padding:"20px",
        color: "black",
        fontFamily: "'Nunito', sans-serif",
        textAlign: "center",
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

class Content extends React.Component {
    render() {
        return null;
    }
}

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
