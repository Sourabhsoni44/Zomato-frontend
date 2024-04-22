import React from 'react'
import './GetApp.css'
// import phone from './IMAGE/phone.avif'

const Getz = () => {
  return (
    <div>
        <div className="main-container">
           <div className="parents23">
            <div className="phone">
                <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
            </div>
            <div className="get-the">
                <div className='appp'>
                    <h1>Get the Zomato app</h1>
                    <h6>We will send you a link, open it on your phone to download </h6>
                    <h6>the app</h6>
                </div>
                <div className='radiaobutton'>
                 <div className='seriser'>
                   <input id='oneee' name="one " type="radio"/>
                        <span id='fgh'>Email</span>
                   <input id='oneee' name="one " type="radio"/>
                    <label id='fgh'>Phone</label>
                  </div>
                  <div className='inputfiled1'>
                   <input  id='inps' type="Email" placeholder='Enter your email' />
                   <button id='shar'>Share app link</button>
                 </div>
                </div>
                <div className='downlod'>
                  <h5>Downlod app from</h5>
                 <span><img id='imag34' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></span>
                  <span><img   id='imag35' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></span>

                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Getz