import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Vote from './Vote'
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FeedFooter from './FeedFooter';
import { auth } from "./Firebase"
//import {db} from "./Firebase";

function Feed({ titles, images, descriptions }) {
    console.log(descriptions)
    const [currentUserName, setCurrentUserName] = useState()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user.displayName)
            setCurrentUserName(user)
        })
    }, [])


    return ( <
        div className = 'feedSection' >
        <
        Vote / >
        <
        div className = 'feedDisplaySection' >
        <
        div className = 'avtarSection' >
        <
        div className = 'avatar' > < /div> { /* <AccountCircleIcon sx={{ fontSize: "30px" }} /> */ } <
        h3 className = 'username' > sumit < span > < VerifiedUserIcon sx = {
            { fontSize: "15px" } }
        /></span > < /h3> <
        /div> <
        h4 className = 'heading' > { titles } < /h4> <
        img className = 'image-sec'
        src = { images }
        alt = '' / >
        <
        p className = 'description' > { descriptions } <
        /p> <
        FeedFooter / >
        <
        /div> <
        /div>
    )
}

export default Feed