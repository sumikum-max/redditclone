import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import Inputcontrole from './Inputcontrole'
import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({

        email: "",
        password: "",
    });

    const [errormsg, setErrormsg] = useState("")
    const [submitbuttonDisabled, setSubmitbuttonDisabled] = useState(false);
    const handleOnClick = () => {
        if (!values.email || !values.password) {
            setErrormsg("Check all fields");
            return;
        }
        setErrormsg("");
        console.log(values)
        signInWithEmailAndPassword(auth, values.email, values.password).then(async(res) => {
            setSubmitbuttonDisabled(false);
            navigate("/App")
            console.log(res);
        }).catch((err) => {
            setSubmitbuttonDisabled(false);
            setErrormsg(err.message);
        });
    };


    return ( <
        div className = "container" >
        <
        Link to = '/' >
        <
        div className = 'close' > +

        <
        /div> <
        /Link> <
        div className = "innerBox" >

        <
        h3 className = "heading" > Login < /h3>

        <
        Inputcontrole label = "Email"
        placeholder = "Enter email address"
        onChange = {
            (event) => setValues((prev) => ({
                ...prev,
                email: event.target.value
            }))
        }
        /> <
        Inputcontrole label = "Password"
        placeholder = "Enter your password"
        onChange = {
            (event) => setValues((prev) => ({
                ...prev,
                password: event.target.value
            }))
        }
        /> <
        div className = 'footer' >
        <
        h5 className = 'error' > { errormsg } < /h5> <
        button onClick = { handleOnClick }
        disabled = { submitbuttonDisabled } > Login < /button> <
        p >
        Already havean account ? < span > < Link to = "/signup" >
        Sign up <
        /Link></span >
        <
        /p> <
        /div> <
        /div>

        <
        /div>
    )
}

export default Login