import React from 'react'
import "./RightSide.css"
import SecurityIcon from '@mui/icons-material/Security';
import RightHome from './RightHome';
import RedditPolicy from './RedditPolicy';
function RightSide() {
  return (
    <div className='rightSide'>
      <div className='insideRight'>
        <div className='redditPremium'>
            <div className='premiumUpper'>
              <div className='security'><SecurityIcon/></div>
              <div className='description'>
                <h6>Reddit Premium</h6>
                <p>The best Reddit experience, with monthly Coins</p>
              </div>
             
            </div>
          <div className='primiumbtn'>  <button className='trynow'>Try Now</button></div>
        </div>
        <RightHome/>
        <RedditPolicy/>
        </div>
    </div>
  )
}

export default RightSide