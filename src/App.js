import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Products from "./components/Products";
// import Navbar from "./components/NavBar/Navbar";

import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart, Checkout, Category, Footer, ProductInfo, MainPage} from "./components"
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("")
    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const fetchCategories = async () => {
        const {data} = await commerce.categories.list();
        setCategories(data)
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
        return (
            <>

            </>

        )
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

    useEffect(() => {
        fetchCategories()
        fetchCart();
        fetchProduct();
    }, [])

    console.log(cart)
    console.log("Running")

    return (
        <div>
            <Router>
                <Navbar totalItems={cart.total_items} categories={categories}/>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route exact path="/products">
                        <Products products={products} categories={categories} onAddToCart={handleAddToCart}/>
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


                    {categories.map((category) => (
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
        </div>
    );
}

export default App;