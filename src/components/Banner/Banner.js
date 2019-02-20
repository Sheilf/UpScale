import React, { Component } from 'react';
import './Banner.css';
import '../../styles/flexborder.css';


class Banner extends Component {
    //to do**
    //set props -> banner
    //
  render() {
    return (
      <section id={this.props.banner} className="Banner flex-border-column-centered">
        <span> Don't downscale.</span> <code> UpScale. </code>
      </section>
    );
  }
}

export default Banner;


