import React from 'react'
import "./Highlight.css"
import HighlightOptions from './HighlightOptions'
import RocketSharpIcon from '@mui/icons-material/RocketSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import NewReleasesSharpIcon from '@mui/icons-material/NewReleasesSharp';
import SwipeUpAltSharpIcon from '@mui/icons-material/SwipeUpAltSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
function Highlight() {
  return (
    <div className='highlights'>
                    <HighlightOptions 
            Icon={RocketSharpIcon}
            text="Best"
            style={{ color: "green" }}
            />
            <HighlightOptions
            Icon={WhatshotSharpIcon}
            text="Hot"
            />
            <HighlightOptions
            Icon={NewReleasesSharpIcon}
            text="New"
            />
            <HighlightOptions
            Icon={SwipeUpAltSharpIcon}
            text="Top"
            />
             <HighlightOptions
            Icon={MoreHorizSharpIcon}
            />
        
    </div>
  )
}

export default Highlight