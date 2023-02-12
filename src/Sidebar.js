import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import OutboundIcon from '@mui/icons-material/Outbound';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
//import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar-sec'>
    <div className='side-bar'>
        <div className='upper-sidebar'>
            <h4 className='sidebar-heading title'>FEEDS</h4>
            <SidebarOptions 
               active
               Icon={HomeIcon} 
               text="Home"/>
                <SidebarOptions 
               Icon={OutboundIcon} 
               text="Popular"/>
        </div>
        <div className='middle-sidebar'>
            <h4 className='sidebar-heading title'>RECENT</h4>
            <SidebarOptions 
               Icon={SportsEsportsIcon} 
               text="Gaming"/>
             <SidebarOptions 
               Icon={SportsBaseballIcon} 
               text="Sports"/>
        </div>
        <div className='lower-sidebar'>
            <h4 className='sidebar-heading title'>TOPICS</h4>
            <SidebarOptions 
               Icon={SportsEsportsIcon} 
               text="Gaming"/>
            <SidebarOptions 
               Icon={SportsBaseballIcon} 
               text="Sports"/>
                <SidebarOptions 
               Icon={AutoGraphIcon} 
               text="Business,Economics ..."/>
               <SidebarOptions 
               Icon={CurrencyBitcoinIcon} 
               text="Crypto"/>
                <SidebarOptions 
               Icon={LiveTvIcon} 
               text="Television"/>
                <SidebarOptions 
               Icon={StarBorderPurple500Icon} 
               text="Celebrity"/>
           <SidebarOptions 
               Icon={MoreHorizIcon} 
               text="More Topics"/>
       
        </div>
    </div>
    <div className='sidebar-lower'>
        <p>
        Create an account to follow your favorite communities and start taking part in conversations.
        </p>
        <a href='/login'><button className='join-redditbtn'>Join Reddit</button></a>
    </div>
    </div>
  )
}

export default Sidebar