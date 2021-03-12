import React,{useState} from 'react';
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from "@material-ui/core";
import PaymentForm from '../PaymentForm'
import AddressForm from '../AddressForm'

import useStyles from "./styles"

const steps = ['Shipping Address','Payment Details']

const MyComponent = () => {
    const [activeStep,setActiveStep] = useState(2);
    const classes = useStyles()

    const Form = () => activeStep === 0
        ?<AddressForm/>
        :<PaymentForm/>;

    const Confirmation = ()=>(
        <div>Confirmation</div>
    )

    return (
        <div>
            <div className="classes.toolbar"/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant={"h4"} align={"center"}>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep  === steps.length?<Confirmation/>:<Form/>}
                </Paper>
            </main>
        </div>
    );
};

export default MyComponent;
