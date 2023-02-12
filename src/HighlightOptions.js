import React from 'react'
import "./HighlightOptions.css"

function HighlightOptions({Icon,text}) {
  return (
    <div className='highlightOptions'>
        <Icon/>
        <h4>{text}</h4>
    </div>
  )
}

export default HighlightOptions