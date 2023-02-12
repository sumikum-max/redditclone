import React from 'react'
import "./Signout.css"
import{app,auth} from "./Firebase"
import { signOut } from "firebase/auth";
//import { AuthContext } from "./AuthProvider";
//import { useNavigate } from 'react-router-dom';
function Signout() {
    //const navigate=useNavigate();
    const handleOnClick=()=>{
        signOut(auth);
        //navigate("/");
    }
  return (
    <div className='signout'>
        <h4 onClick={handleOnClick} >Signout</h4>
    </div>
  )
}

export default Signout