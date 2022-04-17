import React from 'react'
import './Photos6.css'
import photo1 from './Rectangle.png'
import photo2 from './Rectangle 31.png'
import photo3 from './Rectangle 32.png'
import photo4 from './Rectangle 36.png'
import photo5 from './Rectangle 37.png'
import photo6 from './Rectangle 38.png'
import image from './image 5.png'
function Photos6() {
    return (
        <div className='photos'>
            <div className="row1">
                <div className="photo1">
                    <img src={photo1} />
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update1">
                        UPDATE ll NOW LIVE
                    </div>
                </div>
                <div className="photo2">
                    <img src={photo2} />
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update2">
                        Odysey Console Development Update
                    </div>
                </div>
                <div className="photo3">
                    <img src={photo3} />
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update3">
                        Odyssey Update 9 Now Live
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="photo4">
                    <img src = {photo4}></img>
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update4">
                        PC Alpha Phase 4:Features, Fixes and Known Issues 
                    </div>
                </div>
                <div className="photo5">
                    <img src = {photo5}></img>
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update5">
                        Prepare to disembark, Commander. Your Odyssey begins on PC, 19 May
                     </div>
                </div>
                <div className="photo6">
                    <img src = {photo6}></img>
                    <div className="date1">
                        1 Apr 2022
                    </div>
                    <div className="update6">
                        Phase 3:Features, Fixes, and Known Issues
                    </div>
                </div>
            </div>

            <div className="downphoto6" >
                <img src = {image} style = {{width:'100%'}}></img>
            </div>
            <div className="gradient">
                Report Anomalies
            </div>
            {/* <div className="form">
                <div className="row3">
                    <div className="name">
                        NAME
                    </div>
                    <div className="email">

                    </div>
                </div>
            </div> */}

            <div className="footer">
                
            </div>


        </div>
    )
}

export default Photos6