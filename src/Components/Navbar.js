import React from 'react'
import './Navbar.css'
import logo from './GalaxyWars.png'
function Navbar() {
    return (
        <div className='nav'>
            <div className="logo">
                <img src={logo} />

            </div>
            <div className="logoname">
                GALAXY WARS
            </div>
            <div className="options">
                <div className="flex">
                    <div className="explore" style={{marginRight:'35px', fontWeight:'bold'}}>
                        EXPLORE
                    </div>
                    <div className="news" style={{marginRight:'35px', fontWeight:'bold'}}>
                        NEWS
                    </div>
                    <div className="community" style={{marginRight:'35px', fontWeight:'bold'}}>
                        COMMUNITY
                    </div>
                    <div className="equip" style={{marginRight:'35px', fontWeight:'bold'}}>
                        EQUIP
                    </div>
                    <div className="guide" style={{marginRight:'35px', fontWeight:'bold'}}>
                        GUIDE
                    </div>
                    <div className="store" style={{marginRight:'35px', fontWeight:'bold'}}>
                        STORE
                    </div>
                    <div className="buynow" id = "buy" style={{marginRight:'35px', color:'black', fontWeight:'bold'}}>
                        BUYNOW
                    </div>
                    <div className="login" style={{fontWeight:'bold'}}>
                        LOGIN
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Navbar