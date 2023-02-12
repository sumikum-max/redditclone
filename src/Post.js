import React, { useEffect } from 'react'
import Feed from './Feed'
import Highlight from './Highlight'
import Newpost from './Newpost'
import "./Post.css"
//import {db}from "./Firebase"
import { useState } from 'react';
//import { async } from '@firebase/util'
//import { collection, onSnapshot, QuerySnapshot,query } from 'firebase/firestore'


function Post() {

    const [userData, setUserData] = useState([]);

    const info = async() => {
        try {
            const res = await fetch("https://reddit-clone-cf839-default-rtdb.asia-southeast1.firebasedatabase.app/.json", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json();
            console.log(data);
            //setUserData({...userData,title:Object.values(data)[0].title,image:Object.values(data)[0].image,description:Object.values(data)[0].description});
            setUserData([...userData, Object.values(data).map((data) => {
                        userData.push(data);
                    }

                )
                //})



            ])
            console.log(userData);
            console.log(Object.values(data)[1].title)
            if (!res === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        info();
    }, [])

    // Object.values(data).map((data)=>{
    //   console.log(data);
    //   return userData;



    return ( <
        div className = 'postSection' >
        <
        Newpost / >
        <
        Highlight / > {
            userData.map((data) => ( <
                Feed
                //  key={index}
                titles = { data.title }
                images = { data.image }
                descriptions = { data.description }
                />
            ))
        } <
        /div>
    )
}

export default Post