import React from 'react'
import './Footer.css'
import acm from './ACM.png';
import combra from './Cobra.png';
function Footer() {
  return (
    <div className='footer'>
        <div className='row11'>
            <img src={acm} style={{width:153, height:144}}/>
            <span>ABOUT US</span>
            <span>OUR GAMES</span>
            <span>CAREERS</span>
            <span>NEWS</span>
            <span>INVESTORS</span>
            <span>CONTACT</span>
            <img src={combra} style={{height:130,width:130}}/>
        </div>
        <div className='row11'>
            {/* <img src={acm} style={{width:153, height:144}}/> */}
            <span>PRIVACY POLICY</span>
            <span>DONOT SELL MY PERSOL INFORMATION</span>
            <span>TERMS AND CONDITIONS</span>
            <span>STORE</span>
            <span>FORUMS</span>
            <span>CONTACT</span>
            {/* <img src={combra} style={{height:130,width:130}}/> */}
        </div>

    </div>
  )
}

export default Footer