import React from 'react'

function FirstComp() {
    const info = "message in 3rd comp from 1st comp"
  return (
    <div>
        <SecondComp info={info}/>
    </div>
  )
}

export default FirstComp