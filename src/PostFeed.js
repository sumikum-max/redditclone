import React, { useState } from 'react'
import "./PostFeed.css"
import PostAddIcon from '@mui/icons-material/PostAdd';
import Inputcontrole from './Inputcontrole';

import { useNavigate } from 'react-router-dom';
//import {db}from "./Firebase"
//import { collection, addDoc } from "firebase/firestore";
function PostFeed() {
    // const[postTitle,setPostTitle]=useState("");
    // const[postImage,setPostImage]=useState("");
    // const[postDescription,setPostDescription]=useState("");
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        title: "",
        image: "",
        description: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]: value })
    }
    const sendFeed = async(e) => {
        e.preventDefault();
        const { title, image, description } = userData;
        const res = fetch("https://reddit-clone-cf839-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
            method: "POST",
            headers: { "Content-Type": "application.json" },
            body: JSON.stringify({
                title,
                image,
                description
            })

        });
        if (res) {
            setUserData({
                title: "",
                image: "",
                description: ""
            })
            alert("done");
        } else {
            alert("ops no");
        }
        navigate("/")
    }






    return ( <
        div className = 'feedContainer' >
        <
        div className = 'hName' >
        <
        PostAddIcon / > Post <
        /div>

        <
        Inputcontrole placeholder = "Title"
        // onChange={(e)=>setPostTitle(e.target.value)}
        name = "title"
        onChange = { postUserData }
        value = { userData.title }
        /> <
        Inputcontrole placeholder = "Paste link here"
        //onChange={(e)=>setPostImage(e.target.value)}
        name = "image"
        onChange = { postUserData }
        value = { userData.image }
        /> <
        textarea placeholder = 'Text Optional'
        //onChange={(e)=>setPostDescription(e.target.value)}
        name = "description"
        onChange = { postUserData }
        value = { userData.description } >
        <
        /textarea> <
        div className = "footer" >
        <
        button onClick = { sendFeed }
        className = 'post' > Post < /button> < /
        div >

        <
        /div>
    )
}

export default PostFeed