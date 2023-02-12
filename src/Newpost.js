import React from 'react'
import "./Newpost.css"
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LinkSharpIcon from '@mui/icons-material/LinkSharp';
import { Link } from 'react-router-dom';
function Newpost() {
  return (
    <div className='newPostSection'>
        <div className='avtar'>
          <div className='avtarlogo'></div>
     {/* <AccountCircleIcon sx={{ fontSize: "50px" }}/> */}
    </div>
    {/* <Link to="/login">+</Link> */}
    <a href='postfeed'>
    <input type="text" placeholder='Create Post' className="postInput"/></a>
     <div className='materialUi'>
      <AddPhotoAlternateIcon sx={{ fontSize: "30px" }}/>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <div className='materialUi'>
      <LinkSharpIcon sx={{ fontSize: "30px" }}/>
      </div>
    </div>
  )
}

export default Newpost