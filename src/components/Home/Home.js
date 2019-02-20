import React, { Component } from 'react';
import './Home.css';
import '../../styles/flexborder.css';
import landingImg from '../../assets/images/airpods-landing.jpeg';
import Banner from '../Banner/Banner';
import '../../firebase-init.js';

class Home extends Component {
    //to do
    //set props -> Home
    //
  render() {
    return (
      <section className="Home flex-border-column-centered">
        <Banner banner="home-banner" />

            <form className="form-inline my-2 my-lg-0">
                 <input className="form-control mr-sm-2" type="text" placeholder="Search Component" />
                 <button className="btn btn-secondary my-2 my-sm-0" type="submit"><code>searchicon</code></button>
            </form>
      </section>
    );
  }
}

export default Home;


