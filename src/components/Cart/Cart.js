import React, { Component } from 'react';
import './Cart.css';
import '../../styles/flexborder.css';
import * as firebase from 'firebase/app';
import { FirebaseError } from '../../../node_modules/@firebase/util';

let db = firebase.firestore();
let users= db.collection("users");
let auth = firebase.auth();

class Cart extends Component {
    //to do
    //set props -> Cart
    //
  constructor(props){
    super(props);
    this.state={
      userIsLogged: false,
      orderCount: 0
    }


  }
  componentDidMount(){
    
    auth.onAuthStateChanged((user) => {
  
      if(user){
        users.doc(user.uid).get().then((doc)=>{
          let cartData = doc.data().cart
          return cartData

        }).then(cartData =>{

          this.setState({
            userIsLogged: true,
            orderCount: cartData.headphoneOrders
          })
        })

        
     


      }else{
          this.setState({
            userIsLogged: false
          })
        //alert user they need to log in to buy
      }

    })


     

  }
  render() {
    let cartHeader;
    let getCart;
    if(this.state.userIsLogged){
      cartHeader = <h2>{firebase.auth().currentUser.displayName+"'s Cart"}</h2>

    }else{
      cartHeader = <h2>You need to log in to purchase products from UpScale!</h2>
    }
    return (
      <section className="Cart flex-border-column-centered">
          {cartHeader}
          <div>

              Order Count:{this.state.orderCount}
              <br/>
              Price: {this.state.orderCount * 20}

              <br/>

              <button>Paypal disabled</button>
          </div>        
      </section>
    );
  }
}

export default Cart;


