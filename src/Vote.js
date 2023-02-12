import React, {  useState } from 'react'
import "./Vote.css"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'; 
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import{auth} from "./Firebase"
//import firebase from "firebase"
//import { useNavigate } from 'react-router-dom';
function Vote() {
  
  const[count,setCount]=useState(23);
  const downVote=()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
       
    setCount(count-1)
        }
      else{
        alert("Please login to Vote")
      }
  })
  }

const upVote=()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
  setCount(count+1)
     
    }else{
      alert("Please login to Vote")
    }
})
}


  return (
    <div className='voteSection'>
      <ArrowCircleUpIcon
       onClick={upVote}
      />
      <div className='count'>{count}</div>
      <ArrowCircleDownIcon
      onClick={downVote}
      />
    </div>
  )
}

export default Vote