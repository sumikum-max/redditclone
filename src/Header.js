import React, { useEffect, useState } from 'react'
import "./Header.css"

// import { Link } from 'react-router-dom';
import {auth,app} from "./Firebase"
function Header(prop) {

  const[currentUserName,setCurrentUserName]=useState()
      useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        console.log(user.displayName)
          setCurrentUserName(user)
        })
      },[])
  
  

  return (
   

    <div className='header'>

        <div className='logo-sec'>
        <div className='logo'></div>
        <h2>reddit</h2>
        </div>
        <div className='searchsec'>
          <input type="search" name='search'id='search' placeholder='Search here'/>
        </div>
        <a href='/login'><button className='loginbtn'>Login</button></a>
        <div className='profile'>
        {/* <a href='/login'><button className='loginbtn'>Login</button></a> */}
        
           {currentUserName &&<span className='cuserName'><h5>{currentUserName.displayName}</h5></span> }
        
            <div className='profilr-pic'>
             
            </div>
        </div>
    </div>
  )
}

export default Header