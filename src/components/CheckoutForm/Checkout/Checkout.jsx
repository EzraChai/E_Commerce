import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom"
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
    Divider,
    Button,
    CssBaseline
} from "@material-ui/core";
import PaymentForm from '../PaymentForm'
import AddressForm from '../AddressForm'

import useStyles from "./styles"
import {commerce} from "../../../lib/commerce";

const steps = ['Shipping Address', 'Payment Details']

const MyComponent = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})
                console.log("Token = ", token)
                setCheckoutToken(token)
            } catch (e) {
                console.log("Error")
                history.pushState("/")
            }
        }
        generateToken()
    }, [])

    const nextStep = () => setActiveStep((prevActiveStep) => (prevActiveStep + 1))
    const backStep = () => setActiveStep((prevActiveStep) => (prevActiveStep - 1))

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm checkoutToken={checkoutToken} backStep={backStep} shippingData={shippingData}
                       onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout}/>;

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 5000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant={"h5"}> Thank you for your
                    purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant={"subtitle1"}>Order: {order.customer.reference}</Typography>
            </div>
            <br/>
            <Button variant={"outlined"} component={Link} to={"/"} type={"button"}>Back to Home</Button>

        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant={"h5"}> Thank you for your purchase</Typography>
                <Divider className={classes.divider}/>
            </div>
            <br/>
            <Button variant={"outlined"} component={Link} to={"/"} type={"button"}>Back to Home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    if (error) {
        <>
            <Typography variant={"h5"}> Error : {error}</Typography>
            <br/>
            <Button variant={"outlined"} component={Link} to={"/"} type={"button"}>Back to Home</Button>
        </>
    }

    return (
        <div>
            <CssBaseline/>
            <div className="classes.toolbar"/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant={"h4"} align={"center"}>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </div>
    );
};

export default MyComponent;
