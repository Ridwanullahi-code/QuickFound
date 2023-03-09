import React, { useState } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation';

interface FormValues {
    step:number
    email: string
    username:string
    password: string
    firstName: string
    lastName: string
    mobile: string
}

const initialState = {
    step: 1,
    email: '',
    username:'',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '+234'
}
const Logic = () => {

    const [state, setState] = useState<FormValues>(initialState)
    
    const { step } = state;
    const { email, username, password, firstName, lastName} = state;
    const values = { email, username, password, firstName, lastName}

    const PrevStep = () => {
        const {step} = state;
        setState({
            ...state,
            step: step - 1
        })
    }
    // proceed to the next step 
    const NextStep = () => {
        const {step} = state;
        setState({
            ...state,
            step: step + 1
        })
    }

    const handleChange = (input:string) => (event:any) => {
        setState(
            {
                ...state,
                [input]: event.target.value
            })
    }

    switch (step) {
    case 1: 
        return (
        <UserDetails
        nextStep= {NextStep}
        handleChange= {handleChange}
        values= {values}
        />
        )
    case 2: 
        return (
        <PersonalDetails
        prevStep = {PrevStep}
        nextStep= {NextStep}
        handleChange= {handleChange}
        values= {values}
        />
        )
    case 3: 
        return (
        <Confirmation
        prevStep = {PrevStep}
        values= {values}
        />
        )
    
    // never forget the default case, otherwise VS code would be mad!
    default: 
        return(
            <div>
                Nothing 
            </div>
        )
}
}

export default Logic;
