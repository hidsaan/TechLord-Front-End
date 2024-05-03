import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
import './styles/Home.scss';
import iphone from '../../images/iphone.jpg'
import macbook from '../../images/macbook.jpg'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='body'>
        <div className='bodyelements '>

            <h1 className='bodyh1'>Welcome to  TechLord!</h1> 

 
          <h3 className='bodyh3'>Your One Stop Destination For All The Tech Stuff</h3>

          <button onClick={() => navigate('./Shop')}>Start Shopping</button>
          <button onClick={() => navigate('./Sell')}>Sell Products</button>
        </div>
      </div>

      <div className="cardsegment">

        <div className="wrapper">

          <Link to={"./Login"}>
          <div className="card"> 
          <h5>Get Awesome Deals!</h5> 
          <p>Register to get 20% off on your first iPhone purchase</p>         
          <img src={iphone}/>
          </div>         
          </Link>
          
          <Link to={"./Login"}>
          <div className="card"> 
          <h5>Limited Time Offer!</h5> 
          <p>Get a Mousepad Free with your First </p>           
          <img src={macbook}/>
          </div>         
          </Link>
          
        </div>

      </div>
      
    </div>

  );
};

export default Home;
