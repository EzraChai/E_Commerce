import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Avatar,
    FormControlLabel,
    Switch,
    Tooltip,
    withStyles, Grid, Fab,
} from "@material-ui/core";
import {animateScroll as scroll} from 'react-scroll'
import {Link, useLocation} from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import useStyles from './styles';


function Navbar({handleChange, state, darkMode}) {
    const classes = useStyles();
    const location = useLocation();
    const [path, setPath] = useState([]);

    useEffect(() => {
        let pathArray = window.location.hash.split('/');
        setPath(pathArray)
    }, [window.location.hash])

    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#52d869',
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: '#52d869',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }))(({classes, ...props}) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });

    const DarkModeToggle = () => {
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return (
            <FormControlLabel id={"DarkModeButton"} style={{marginBottom: "1px", marginLeft: "2px"}}
                              control={<IOSSwitch checked={state.checkedB}
                                                  onChange={handleChange} name="checkedB"/>}
                              labelPlacement="end"
                              label={!darkMode ? <Brightness2RoundedIcon
                                  style={{marginTop: "4px", color: "#fcba03"}}
                              /> : <WbSunnyIcon style={{marginTop: "6px", color: "#fc7b03"}}/>
                              }/>)
        return (
            <Tooltip title={darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
                     aria-label={darkMode ? "enable-light-mode" : "enable-dark-mode"}>
                <FormControlLabel id={"DarkModeButton"} style={{marginBottom: "1px", marginLeft: "2px"}}
                                  control={<IOSSwitch checked={state.checkedB}
                                                      onChange={handleChange} name="checkedB"/>}
                                  labelPlacement="end"
                                  label={!darkMode ? <Brightness2RoundedIcon
                                      style={{marginTop: "4px", color: "#fcba03"}}
                                  /> : <WbSunnyIcon style={{marginTop: "6px", color: "#fc7b03"}}/>
                                  }/>
            </Tooltip>)
    }

    const Facebook = () => {
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return <></>
        return (<IconButton onClick={() => window.open('https://www.facebook.com/NagaworldINT', '_blank')}>
                <FacebookIcon/>
            </IconButton>)
    }
    return (<div>
            <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
                <Toolbar>
                    <Typography component={Link} to={"/"} variant={"h6"} onClick={() => scroll.scrollToTop()}
                                className={classes.title} color={"inherit"}>
                        <Avatar src={"https://i.ibb.co/2WLm1My/53078607-2630694290291910-8889152933308923904-o.png"}
                                alt={"Brand Logo"} height="25px" className={classes.image}/>
                        TY Studio ?? Concept Tee
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname !== "/cart" && location.pathname !== "/checkout" ? (
                        <div className={classes.button}>
                            {/*<IconButton component={Link} to={"/cart"} aria-label="Show cart items" color={"inherit"}>
                                <Badge badgeContent={totalItems} color={"secondary"}>
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>*/}
                            <Grid container alignItems="flex-end" direction="row">
                                <Grid item>
                                    <DarkModeToggle/>
                                </Grid>
                                <Tooltip title={"Facebook"} aria-label={"facebook"}>
                                    <Grid item>
                                        <Facebook/>
                                    </Grid>
                                </Tooltip>
                                {/*<Grid item>
                                    <IconButton onClick={() => window.open('https://shopee.com.my/ty_studio', "_blank")}>
                                        <img style={{width: "17.5px", marginTop: "1px", height: "26px"}}
                                             className={classes.grayscale}
                                             src="https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png"
                                             alt="shopee"/>
                                    </IconButton>
                                </Grid>*/}
                            </Grid>
                        </div>) : <></>}
                </Toolbar>
            </AppBar>

            {location.pathname !== "/" && path[1] !== "category" && path[1] !== "product" &&
            <Fab size="medium"
                 className={classes.goBackButton}
                 onClick={() => window.history.back()}>
                <KeyboardBackspaceIcon/>
            </Fab>}
            {path[1] === "category" && <Fab size="medium"
                                            className={classes.goBackButton}
                                            onClick={() => window.location.replace("/")}>
                <KeyboardBackspaceIcon/>
            </Fab>}
            {path[1] === "product" && <Fab size="medium"
                                           className={classes.goBackButton}
                                           style={{marginTop: "0"}}
                                           onClick={() => window.history.back()}>
                <KeyboardBackspaceIcon/>
            </Fab>}
        </div>
    );
}

export default React.memo(Navbar);