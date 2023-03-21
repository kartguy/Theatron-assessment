import React from 'react'
import japan from '../assets/japan.mp4'

function Main(){
    return(
        <div className='main'>
        <div className='overlay'></div>
        <video src={japan} autoPlay loop muted />
            <div className='content'>
                <h1>This Is Japan</h1>
                <p>Calm serenity</p>
            </div>
        </div>
    )
}

export default Main