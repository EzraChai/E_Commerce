import React from 'react';
import {Typography, Button, Divider} from "@material-ui/core";
import {Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

import Review from './Review'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const MyComponent = ({checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep, timeout}) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const cardElements = elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElements})

        if (error) {
            console.log(error)
        } else {
            const orderData = {
                line_items: checkoutToken.live_items,
                customer: {
                    firstname: shippingData.firstName,
                    lastname: shippingData.lastName,
                    email: shippingData.email
                },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address,
                    town_city: shippingData.city,
                    country_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zipcode,
                    country: shippingData.shippingCountry,
                },
                fulfillment: {shipping_method: shippingData.shippingOption},
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }

            onCaptureCheckout(checkoutToken.id, orderData);

            timeout()

            nextStep();

        }
    }
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider/>
            <Typography variant={"h6"} gutterBottom style={{margin: "20px 0"}}> Payment Method </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement/>
                            <br/><br/>
                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                <Button variant={"outlined"} onClick={backStep}>Back</Button>
                                <Button type={"submit"} variant={"contained"} disabled={!stripe} color={"primary"}>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default MyComponent;
