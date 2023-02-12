import React from 'react'
import "./RightHome.css"
function RightHome() {
  return (
    <div className='homeSection'>
        <div className='upperImage'></div>
        <div className='redditman'>
            <div className='redman'>
                <img src='https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png' alt=''/>
            </div>
            <h4>Home</h4>
            
        </div>
        <div className='paragraph'>
                <p>Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
            </div>
        <div className='btn'>
          <a href='./PostFeed'>  <button className='createpost'>Create Post</button></a>
        </div>
        <div className='btn'>
            <button className='communitybtn'>Create Community</button>
        </div>
    </div>
  )
}

export default RightHome