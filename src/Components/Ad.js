import React, { Component } from 'react';
import '../Styles/Ad.css';
import tkxelLogo from '../Assets/tkxel.png'

class Ad extends Component {
  render() {
    return (
        <div className="ad">
        <h2>Advertisement</h2>
        <p>Engineering Internship</p>
        <img className='logo' src={tkxelLogo} alt='Error loading...'/>
      </div>
    );
  }
}

export default Ad;
