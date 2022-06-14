import React, { Component } from 'react';
import "./About.css";
import pp from '../assets/pp.jpeg';
import IBM from '../assets/IBM.png'
export default class About extends Component {
  render() {
    return (
      <div>

      <div class = "top_right">
        <img classname= "logo"
        src={IBM}
        width = "170"
        height = "50" 
        ></img>

        </div>  
      <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={pp}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Kendrick Cortez</div>
        <div className="brief_description">
          Currently a Senior at the University of Houston majoring in Computer Engineering
          and Electrical Engineering Technlolgy.
        </div>
      </div>
    
  </div>

        
      </div>
    )
  }
}