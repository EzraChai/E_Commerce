import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {commerce} from "../../../../lib/commerce";
import {CircularProgress, Grid} from "@material-ui/core";
import {Link} from "react-router-dom"
import Product from "../Product";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    circular:{
        marginTop: "8%",
        "@media (max-width:800px)":{
            marginTop:"15%",
        }
    }
}));

const ScrollableTabsButtonAuto = ({categories,darkMode,indexValue})=>{
    const classes = useStyles();
    const [done, setDone] = useState(false);
    const [value, setValue] = useState(indexValue);
    // const [linkCategoryWithIndex,setLinkCategoryWithIndex] = useState([])
    const [products, setProducts] = useState([]);
    // const categorySlug = [category.slug];
    console.log(categories)

    useEffect(() => {
        fetchProducts()
        return setDone(false)
    }, [value])

    /*const fetchProducts = async () => {
        if (categories[value]) {
        console.info("Current Index " , categories[value].slug)
            let categorySlug = [categories[value].slug]
            const {data} = await commerce.products.list({category_slug: categorySlug});
            setDone(true)
            setProducts(data);
        }
    }*/

   /* const lastFuc = () =>{
        setDone(false)
        // localStorage.setItem("OldProduct",JSON.stringify(products))
    }
*/
    const fetchProducts = async()=>{
        // let oldProducts = JSON.parse(localStorage.getItem("OldProduct"))
        // console.log(oldProducts)
        // if (oldProducts) {
        //     console.log("Old Products", oldProducts)
        // }
        let pathArray = window.location.hash.split('/');
        let path = pathArray[2]
        let categorySlug = [categories[path - 1].slug]
        const {data} = await commerce.products.list({category_slug: categorySlug});
        setDone(true)
        setProducts(data)
    }

    // const fetchProduct = async () => {
    //     const {data} = await commerce.products.list({category_slug: categorySlug});
    //     console.log("data", data)
    //     setDone(true)
    //     setProducts(data);
    // }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example">
                    {categories.map((category, index) => {
                        // setLinkCategoryWithIndex(valueBefore=>[...valueBefore,{category,index}])
                        return(
                            <Tab component={Link} to={`/category/${index + 1}`} key={index} label={category.name} {...a11yProps(index)} />
                        )
                    })}

                    {/*  <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />*/}
                </Tabs>
            </AppBar>
            {}
            <TabPanel value={value} index={value}>
                <Grid container justify="center" spacing={5}>
                    {!done ? (
                        <>
                            <br/><br/><br/><br/>
                            <div className={classes.circular} >
                                <CircularProgress size={68} color={"secondary"}/>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <br/><br/><br/><br/><br/>
                            </div>
                        </>
                    ) : (
                        <>
                            {products.map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product darkMode={darkMode} product={product} categories/>
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
            </TabPanel>
        </div>
    );
}

export default ScrollableTabsButtonAuto;