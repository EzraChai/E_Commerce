import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Products from "./components/Products";
// import Navbar from "./components/NavBar/Navbar";

import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart, Checkout, Category, Footer, ProductInfo, MainPage} from "./components"
import {Snackbar,ThemeProvider,createMuiTheme} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("")
    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false);
    const [notNullObject,setNotNullObject] = useState([])
    const [latestProduct,setLatestProduct] = useState([])
    const [darkMode,setDarkMode] = useState(false);
    const [state, setState] = React.useState({checkedB: false,});

    const theme = createMuiTheme({

        palette:{
            type: darkMode?"dark":"light",
            background:{
                paper:darkMode?"#1a1c1c":"#fff",
                default:darkMode?"#424242":"#fafafa",
            },
        }
    });

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        setDarkMode(!darkMode)
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const fetchCategories = async () => {
        const {data} = await commerce.categories.list();
        data.forEach(removeNullProduct)
    }

    const removeNullProduct =(item)=>{
        if(item.products !== 0){
            console.log("Item not null", item)
            setNotNullObject(prevState => [...prevState,item])
        }
    }

    const fetchProduct = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAddToCart = async (productId, quantity) => {

        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart)
        handleClick()
    }


    const handleUpdateCartQuantity = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart)
    }

    const handleRemoveCartQuantity = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart()
        } catch (e) {
            setErrorMessage(e.data.error.message)
        }
    }

    const fetchNewestProduct = async () =>{
        const {data} = await commerce.products.list({limit:4});
        setLatestProduct(data);
        console.log("data",data)
    }

    useEffect(() => {
        fetchNewestProduct();
        fetchCategories();
        fetchCart();
        fetchProduct();
        return(
            setNotNullObject([])
        )
    }, [])

    console.log(cart)
    console.log("not Null List",notNullObject)

    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <Navbar totalItems={cart.total_items} handleChange={handleChange} state={state} categories={categories}/>
                    <Switch>
                        <Route exact path="/">
                            <MainPage darkMode={darkMode} latestProduct={latestProduct} categories={notNullObject}/>
                        </Route>
                        <Route exact path="/products">
                            <Products products={products} onAddToCart={handleAddToCart}/>
                        </Route>

                        <Route exact path="/cart">
                            <Cart cart={cart} handleUpdateCartQuantity={handleUpdateCartQuantity}
                                  handleRemoveCartQuantity={handleRemoveCartQuantity} handleEmptyCart={handleEmptyCart}/>
                        </Route>


                        <Route exact path="/checkout">
                            <Checkout cart={cart}
                                      order={order}
                                      onCaptureCheckout={handleCaptureCheckout}
                                      error={errorMessage}/>
                        </Route>


                        {notNullObject.map((category) => (
                            <Route exact path={`/category/${category.slug}`}>
                                <Category category={category} onAddToCart={handleAddToCart}/>
                            </Route>
                        ))}

                        {products.map((product) => (
                            <Route exact path={`/product/${product.permalink}`}>
                                <ProductInfo product={product} onAddToCart={handleAddToCart}/>
                            </Route>
                        ))}

                    </Switch>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Added to Cart
                        </Alert>
                    </Snackbar>
                    <Footer/>
                </Router>
            </ThemeProvider>


        </>
    );
}

export default App;