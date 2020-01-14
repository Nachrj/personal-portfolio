import React from 'react'
import StartingPage from './StartingPage.js'
import NavBar from './NavBar.js'
import Background from '../images/poly-background.jpg'

const WebPage = () => {
    return (
        <div style={{backgroundImage: `url(${Background})`}}>
            <div>
                <NavBar />
            </div>
            <StartingPage />
        </div>
    )
}

export default WebPage