import React, { Component } from 'react';
import '../../styles/flexborder.css';
import {Link} from 'react-router-dom';
// import urllogo from  '../../assets/logo/upscale-logo.jpg';
import urlshopping from  '../../assets/icons/shopping-cart.png';
import urlhome from '../../assets/icons/home.png';
import urlmarketplace from '../../assets/icons/marketplace.png'
import urlstore from '../../assets/logo/upscale-logo-alt.jpg';
import './Nav.css';

import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';


class Nav extends Component {
    //to do
    //set props -> banner
    //
  constructor(props){
    super(props);
    this.state = {
      menuClicked: false
    }

    this.openMobileMenu=this.openMobileMenu.bind(this);
  }

  openMobileMenu(){
    let menu = document.getElementById("navbarColor02");
    let counter = this.state.menuClicked;
    
      if(!counter){
        menu.style.display = 'flex';
        
      }else{
        menu.style.display="none";
    
      }
    
      
    
    this.setState({
      menuClicked: !counter
    })
  }
  render() {
    return (
        <nav id="nav-component" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/cart" className="navbar-brand icon-container" href="#"> <img src={urlshopping} id="return-home-nav-button" className="nav-icon"/>  Cart</Link>
  <button className="navbar-toggler" onClick={this.openMobileMenu} type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse flex-border-row-centered" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        {/* add home icon */}
        <Link to="/" className="nav-link" href="#"><img src={urlhome} className="nav-icon"/>  Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/marketplace" className="nav-link" href="#"><img src={urlmarketplace} className="nav-icon"/>  Marketplace</Link>
      </li>
      <li className="nav-item">
      <Link to="/store" className="nav-link" href="#"><img src={urlstore} className="nav-icon"/>  Store</Link>
      </li>
      <li className="nav-item">
      <Link to="/construction/contact" className="nav-link" href="#">Contact</Link>
      </li>
    </ul>

    <GoogleSignIn />
  </div>
</nav>
    );
  }
}

export default Nav;


