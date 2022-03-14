import './navbar.css';

import React, { Component } from 'react'



export default class navbar extends Component {
  render() {
    let navMenuObj = [{
      name: "home",
      icon: "fas fa-home icons",
      href: "#sectionAbout"
    },
    {
      name: "My work",
      icon: "far fa-file-code icons",
      href: "#sectionMyWork"
    },
    {
      name: "Contact me",
      icon: "far fa-file-code icons",
      href: "#sectionContactme"
    }
  ];

    return (
      <nav className="nav-bar">
        {navMenuObj.map(function (value, index) {
              
            return <a key={index} className='navItems' href={value.href} ><i key={index} className={value.icon}></i>{value.name}</a>;
              
              
            })}


        {/* <a className='navItems' href={"#sectionAbout"} ><i className="fas fa-home icons"></i>Home</a>
        <a className='navItems' href={"#sectionMyWork"} ><i className="far fa-file-code icons"></i>My Work</a>
        <a className='navItems' href={"#sectionContactme"} ><i className="far fa-address-card icons"></i>Contact me</a> */}
      </nav>
    )
  }
}

