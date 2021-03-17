import React, {useEffect, useState} from 'react';
import {Collapse, IconButton, Typography} from "@material-ui/core";
import {makeStyles, CssBaseline} from "@material-ui/core";
import {Link} from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MainContent from "./Content"


const MyComponent = ({latestProduct, categories, darkMode}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            scrollBehavior: "smooth",
            minHeight: "100vh",
            backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80')" : "url('https://i.ibb.co/34kySSK/andrej-lisakov-Yy4s-N6-Qzbo-U-unsplash.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: darkMode ? "contain" : "100% 70%",
            transition: "0.6s",
            ["@media (max-width:1025px)"]:{
                backgroundSize: darkMode ? "contain" : "100% 35%",
            },
            ["@media (max-width:450px)"]: {
                backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80')" : "url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
                backgroundSize: darkMode ? "210% 20%" : "140% 20%",
            },

        },

        title: {
            display: "flex",
            justifyContent: "center",
            height: "450px",
            alignItems: "flex-end",
            ["@media (max-width:800px)"]: {
                height: "395px",
            }
        },
        heading: {
            padding: "20px",
            fontFamily: "'Nunito', sans-serif",
            textAlign: "center",
            transition: "0.6s",
            ["@media (max-width:800px)"]: {
                fontSize: "64px",
            }
        },
        goDown: {
            textAlign: "center",

        },
        buttonPress: {
            display: "flex",
            justifyContent: "center",
        }
    }))


    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true)
    })
    const classes = useStyles();

    const handleClick = () => {
        document.querySelector('.mainPoint').scrollIntoView({
            behavior: 'smooth'
        });
    }


    return (
        <>
            <CssBaseline/>
            <div className={classes.root}>
                <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedHeight={100}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} variant={"h1"}>TY studio.</Typography>
                    </div>
                    <div className={classes.buttonPress}>
                        <IconButton onClick={() => (handleClick())}>
                            <ExpandMoreIcon fontSize={"large"} className={classes.goDown}/>
                        </IconButton>
                    </div>
                </Collapse>
                <MainContent darkMode={darkMode} latestProduct={latestProduct}/>
                {/*{categories.map((category )=>(
                <ul>
                    <li>
                        <Link to={`/category/${category.slug}`}>
                            <h3>{category.name}</h3>
                        </Link>
                    </li>
                </ul>
            ))}*/}
            </div>
        </>

    );
};

export default MyComponent;

