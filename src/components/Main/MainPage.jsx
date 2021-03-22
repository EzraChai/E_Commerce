import React, {useEffect, useState} from 'react';
import {Collapse, IconButton, Typography} from "@material-ui/core";
import {makeStyles, CssBaseline} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MainContent from "./Content"
import {Link, animateScroll as scroll} from "react-scroll";


const MyComponent = ({latestProduct, categories, darkMode}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: "100vh",
            backgroundImage: darkMode ? "url('https://i.ibb.co/4gt4p0S/alexander-andrews-v-GCEr-Dhrc3-E-unsplash-1.webp')" : "url('https://i.ibb.co/34kySSK/andrej-lisakov-Yy4s-N6-Qzbo-U-unsplash.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: darkMode ? "cover" : "cover",
            backgroundPosition: darkMode ? "50% 60%" : "50% 31%",
            backgroundAttachment: "fixed",
            transition: "0.6s",
            "@media (max-width:1360px)": {
                backgroundSize: darkMode ? "cover" : "cover",
                backgroundPosition: "center",
            },
            "@media (max-width:450px)": {
                backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1490814525860-594e82bfd34a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80')" : "url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
                backgroundPosition: "center",
                /* backgroundSize: darkMode ? "210% 20%" : "140% 20%",*/
                backgroundSize: darkMode ? "cover" : "cover",
            },

        },

        title: {
            display: "flex",
            justifyContent: "center",
            height: "450px",
            alignItems: "flex-end",
            "@media (max-width:800px)": {
                height: "395px",
            }
        },
        heading: {
            padding: "20px",
            fontFamily: "'Nunito', sans-serif",
            textAlign: "center",
            transition: "0.6s",
            "@media (max-width:800px)": {
                fontSize: "64px",
            }
        },
        goDown: {
            border: "2px solid black",
            borderRadius: "20px",
            textAlign: "center",
        },
        goDownWhite: {
            border: "2px solid white",
            borderRadius: "20px",
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

    return (
        <>
            <CssBaseline/>
            <div className={classes.root}>
                <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedHeight={100}>
                    <div className={classes.title}>
                        <Typography className={classes.heading} variant={"h1"}>TY studio.</Typography>
                    </div>

                    <div className={classes.buttonPress}>
                        <Link to="section1" smooth={true}>
                            <IconButton>
                                {!darkMode ? (<ExpandMoreIcon fontSize={"large"} className={classes.goDown}/>) :
                                    (<ExpandMoreIcon fontSize={"large"} className={classes.goDownWhite}/>)}
                            </IconButton>
                        </Link>

                    </div>

                </Collapse>
                <MainContent darkMode={darkMode} categories={categories} latestProduct={latestProduct}/>
            </div>
        </>

    );
};

export default React.memo(MyComponent);

