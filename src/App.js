import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Post from './Post';
import Login from "./Login"
import Signup from "./Signup"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostFeed from './PostFeed';
import RightSide from './RightSide';
import Signout from './Signout';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        div className = 'main' >
        <
        Sidebar / >
        <
        div className = 'mainLeftSection' >
        <
        Post / >
        <
        RightSide / >

        <
        /div> < /
        div > <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/login'
        element = { < Login / > }
        /> <
        Route path = '/signup'
        element = { < Signup / > }
        /> <
        Route path = '/postfeed'
        element = { < PostFeed / > }
        /> < /
        Routes > <
        /BrowserRouter> <
        Signout / >
        <
        /div>
    );
}

export default App;