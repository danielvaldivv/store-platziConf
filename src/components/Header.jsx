import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Home = () => (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          PlatziConf Merch
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/Checkout">
          <i className="fas fa-shopping-basket"/>
        </Link>
      </div>
    </div>
  )

export default Home