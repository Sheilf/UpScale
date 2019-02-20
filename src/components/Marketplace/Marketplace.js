import React, { Component } from 'react';
import './Marketplace.css';
import '../../styles/flexborder.css';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import Product from '../Product/Product';

let db = firebase.firestore();
let auth = firebase.auth();
let userProductCollection = db.collection("image_uploads");



class Marketplace extends Component {
    //to do
    //set props -> Marketplace
    //
  constructor(props){
    super(props);
    this.state={
        productList: []
    }
  }

  componentDidMount(){
    /*
      component mount
      get Firebase data
      loop data into productList
      generate Products
      poost the productList

    */
   let list = this.state.productList;

   userProductCollection.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        list.push(<Product imgSrc={doc.data().imageFile} item={doc.data().name} price={doc.data().price}/>)
        
    });
    return list 
  }).then(products => {
    this.setState({productList: products})
  })




  }

  render() {
    let displayList = this.state.productList;
    alert("Displaying list...")
    return (
      <section className="Marketplace flex-border-column-centered">
         <Link to="/sell"> <button>Post a Product </button></Link>
          <section>{displayList}</section>
      </section>
    );
  }
}

export default Marketplace;


