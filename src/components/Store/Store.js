import React, { Component } from 'react';
import './Store.css';
import '../../styles/flexborder.css';
import Product from '../Product/Product';
import urlAirpodsStore from '../../assets/images/airpods-store.png';
import * as firebase from 'firebase/app';

let db = firebase.firestore();
let users= db.collection("users");
let auth = firebase.auth();

class Store extends Component {
    //to do
    //set props -> Store
    //

  constructor(props){
    super(props);
    this.state={
      userIsLogged: false, 
      currentUser: ""
    }
    this.addToCart = this.addToCart.bind(this);
  } 

  componentDidMount(){

  
    auth.onAuthStateChanged((user) => {
      if(user){ //let use buy?
        let currentUser = user.uid;
        let cart = {}
        
        //SET A NEW USER INTO USER DATABASE
        users.doc(currentUser).get().then((doc)=>{
            if(doc.data()){

            }else{
              users.doc(currentUser).set({
                displayName: user.displayName,
                cart: {headphoneOrders: 0}
              })
            }

        })

        this.setState({
            userIsLogged: true,
            currentUser: currentUser
        })


      }else{
          this.setState({
            userIsLogged: false
          })
        //alert user they need to log in to buy
      }

    })

  }

  addToCart(event){
      //alert(document.getElementById("quantity-counter").value);
    
      let orderCount = document.getElementById("quantity-counter").value;

      users.doc(this.state.currentUser).update({
        cart: {headphoneOrders: orderCount}
      })




  }

  render() {
    let buttonState

    if(this.state.userIsLogged){
      buttonState = (
      <div>
      <button onClick={this.addToCart}>Add to Cart </button>&nbsp; &nbsp; &nbsp; &nbsp; 
      Quantity: <input id="quantity-counter" type="number" min="1" max="100" defaultValue="1"/>
      </div>
    )
    }else{
      buttonState = <button disabled>You need to log in to purchase products!</button>
    }

    return (
      <section className="Store flex-border-column-centered">
        <Product item="airpods" price="19.99" imgSrc={urlAirpodsStore} />
        <br/>
        {buttonState}
      </section>
    );
  }
}

export default Store;
