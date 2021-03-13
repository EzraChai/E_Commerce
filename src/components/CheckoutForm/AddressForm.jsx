import React, {useEffect, useState} from 'react';
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from "@material-ui/core";
import {Link} from "react-router-dom"
import {useForm,FormProvider} from "react-hook-form"
import {commerce} from "../../lib/commerce";

import FormInput from './CustomTextField'

const MyComponent = ({checkoutToken,next}) => {
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingSubdivisions,setShippingSubdivisions] = useState([]);
    const [shippingSubdivision,setShippingSubdivision] = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState('');

    const fetchShippingContries =async (CheckoutTokenId) =>{
        const {countries} = await  commerce.services.localeListShippingCountries(CheckoutTokenId);
        console.log("Countries ",countries)
        setShippingCountries(countries);
        //[MY,TW,AM]
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubDivisions = async (CoutryCode) =>{
        const {subdivisions} = await commerce.services.localeListSubdivisions(CoutryCode);
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOption = async (CheckoutTokenId,country,region = null) =>{
        const options = await commerce.checkout.getShippingOptions(CheckoutTokenId,{country,region})

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    const coun = Object.entries(shippingCountries).map(([code,name]) =>({id:code,label:name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code,name]) =>({id:code,label:name}))
    const options = shippingOptions.map((sO)=>({id:sO.id,label:`${sO.description} - (${sO.price.formatted_with_symbol})`}))
    console.log("Countries = = = = = ",coun)

    useEffect(()=>{
        fetchShippingContries(checkoutToken.id)
    },[]);

    useEffect(()=>{
        if(shippingCountry) fetchSubDivisions(shippingCountry)
    },[shippingCountry])

    useEffect(()=>{
        if (shippingSubdivision) fetchShippingOption(checkoutToken.id,shippingCountry,shippingSubdivision)
    },[shippingSubdivision])

    const methods = useForm();
    return (
        <div>
            <Typography variant={"h6"} gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=>next({ ...data,shippingCountry,shippingSubdivision,shippingOption }))}>
                    <Grid container spacing={4}>
                        <FormInput name={'firstName'} label={'First name'} />
                        <FormInput name={'lastName'} label={'Last name'} />
                        <FormInput name={'address'} label={'Shipping Address'} />
                        <FormInput name={'email'} label={'Email'} />
                        <FormInput name={'city'} label={'City'} />
                        <FormInput name={'zipcode'} label={'ZIP / Postal code'} />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) =>setShippingCountry(e.target.value)}>
                                {coun.map((country) =>(
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}

                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) =>setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) =>(
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => e.target.value}>
                                {options.map((option) =>(
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <Button component={Link} to={"/cart"} variant={"outlined"}>Back To Cart</Button>
                        <Button type={"submit"} variant={"contained"} color={"primary"}>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default MyComponent;
