import React, { Component } from 'react';
import './Construction.css';
import '../../styles/flexborder.css';
import url from  '../../assets/logo/upscale-logo.jpg';
import {Link} from 'react-router-dom';

class Construction extends Component {
  render() {
    return (
      <section id="construction" className="flex-border-column-centered">
        <div>You're in the  <code> UpScale  {this.props.match.params.id} </code> application. </div>
        <div><code> Upscale {this.props.match.params.id} </code> is in development</div>

        <Link to="/"> <img alt="UpScale logo" src={url} /> </Link>

        <div>Return home </div>
      </section>
    );
  }
}

export default Construction;


