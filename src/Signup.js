import React, { useState } from 'react'
import "./Signup.css"
import Inputcontrole  from './Inputcontrole'
import { Link,useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase';
function Signup() {
    const navigate=useNavigate();
    const[values,setValues]=useState({
        name:"",
        email:"",
        password:"",
    });

    const[errormsg,setErrormsg]=useState("")
   const[submitbuttonDisabled,setSubmitbuttonDisabled]=useState(false);
const handleOnClick=()=>{
    if(!values.name || !values.email || !values.password){
        setErrormsg("Check all fields");
        return;
    }
    setErrormsg("");
  console.log(values)
  createUserWithEmailAndPassword(auth,values.email,values.password).then(async(res)=>{
    setSubmitbuttonDisabled(false);
    const user=res.user;
    await updateProfile(user,{
        displayName:values.name,
    });
    navigate("/App")
    console.log(res);
  }).catch((err)=>{
    setSubmitbuttonDisabled(false);
    setErrormsg(err.message);
  });
};


  return (
    
         <div className="container" >
        <div className="innerBox">
            <h3 className="heading">Signup</h3>
            <Inputcontrole  label="Name" placeholder="Enter your name"
            onChange={(event)=>setValues((prev)=>({
               ...prev,name:event.target.value
            }))}
            />
            <Inputcontrole  label="Email" placeholder="Enter email address"
            onChange={(event)=>setValues((prev)=>({
                ...prev,email:event.target.value
              }))}
            />
            <Inputcontrole  label="Password" placeholder="Enter your password"
             onChange={(event)=>setValues((prev)=>({
                ...prev,password:event.target.value
              }))}
            />
            
            <div className='footer'>
            <h5 className='error'>{errormsg}</h5>
                <button onClick={handleOnClick} disabled={submitbuttonDisabled}>Sign up</button>
                <p>
                    Already havean account? <span><Link to="/login">
                        Login
                        </Link></span>
                </p>
            </div>
        </div>

    </div>
    
  )
}

export default Signup