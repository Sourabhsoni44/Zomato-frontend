import React from 'react'
import './Cards.css'
const Cards = () => {
    return (
        <div className="Maincards">
          <div class="card">
            <img
              className="cardimage"
              height="192px"
              width="353"
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>Order Online</h2>
              <p class="card-text">Stay Home and order to your doorstep.</p>
            </div>
          </div>


          <div class="card">
            <img
              className="cardimage"
              height="192px"
              width="353"
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>Dining</h2>
              <p class="card-text">View the city's favourite dining venues.</p>
            </div>
          </div>
          <div class="card">
            <img
              className="cardimage"
              height="192px"
              width="353"
              src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>Nightlife and Clubs</h2>
              <p class="card-text">Explour the city's top nightlife outlets.</p>
            </div>
          </div>
        </div>

    )
}

export default Cards