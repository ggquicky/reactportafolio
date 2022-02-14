import './navbar.css';

import React, { Component } from 'react'



export default class navbar extends Component {
    
  render() {
    return (
        <nav className= "nav-bar">
        <ul>
            <li><a href={"#sectionAbout"} ><i className="fas fa-home"></i>Home</a></li>
            <li><a href={"#sectionMyWork"} ><i className="far fa-file-code"></i>My Work</a></li>
            <li><a href={"#sectionContactme"} ><i className="far fa-address-card"></i>Contact me</a></li>
            
        </ul>
    </nav>
    )
  }
}

