import React from 'react'
import "./FeedFooter.css"
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function FeedFooter() {
  return (
    <div className='feedFooter'>
        <div className='footerItem'>
    <AddCommentIcon/>
    <h5>Comments</h5>
    </div>
    <div className='footerItem'>
    <ShareIcon/>
    <h5>Share</h5>
    </div>
    <div className='footerItem'>
    <BookmarkBorderIcon/>
    <h5>Save</h5>
    </div>
    </div>
  )
}

export default FeedFooter