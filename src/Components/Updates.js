import React from 'react'
import Rectangle66 from './Rectangle 66.png'
import Rectangle67 from './Rectangle 67.png'
import Rectangle68 from './Rectangle 68.png'
import './Updates.css'
function Updates() {
    return (
        <div className='updates'>
            <div className='container1'>
                <img src={Rectangle66} style={{ width: 840, heigth: 526 }} />
                <div className='date'>1 APR 2022</div>
                <div className='update11'>UPDATE II NOW LIVE</div>
                <div className='description'>Lorem ipsum dolednjk;gfhgfbvfkn;cvfj;ghdfpigl;dljk.vcjivhofdnlsvc lbji cvsbdflvbpdvfd</div>
            </div>
            <div className='left'>
                <div className='container2'>
                    <img className='image2' src={Rectangle67} style={{ width: 600, heigth: 263 }} />
                    <div className='date2'>11 JAN 2030</div>
                    <div className='description2'>Taurus Mining Ventures Operation <br/> Concludes</div>
                </div>
                <div className='container3'>
                    <img className='image3' src={Rectangle68} style={{ width: 600, heigth: 264 }} />
                    <div className='date3'>1 APR 2022</div>
                    <div className='description3'>Marlinists Hold Public<br/> Referendum</div>
                </div>
            </div>
        </div>
    )
}

export default Updates