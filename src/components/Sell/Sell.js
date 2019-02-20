import React, { Component } from 'react';
import './Sell.css';
import '../../styles/flexborder.css';
  import * as firebase from 'firebase';

let firestore = firebase.firestore();
let storage = firebase.storage();
let auth = firebase.auth();
let imageUploads = firestore.collection("image_uploads");

class Sell extends Component {
    //to do
    //set props -> Sell
    //

  constructor(props){
    super(props);
    this.state={

    }

    this.uploadProductPhoto = this.uploadProductPhoto.bind(this);
  }

  componentDidMount(){
    alert("COMPONENT MOUNTED...")
  }

  uploadProductPhoto(event){
    alert("Button is clicked...")
    let files = document.getElementById("file-container").files;
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;

    for(let i = 0; i < files.length; i++){
      let file = files[i];

      let storageRef = storage.ref("USER_MARKETPLACE_IMAGES/"+file.name);
      alert("Starting storage...")
      storageRef.put(file).then(snapshot =>{
        alert("Snapshot reffered")
        return snapshot.ref.getDownloadURL();
      }).then(downloadURL =>{
        alert("URL setting")
        let currentUser = firebase.auth().currentUser.uid;
        imageUploads.add({
          imageFile: downloadURL,
          price: productPrice,
          name: productName

        })
        alert("File uploaded")
      })

    }
  }
  render() {
    return (
      <section className="Sell flex-border-column-centered">
        <input id="product-name" type="text" placeholder="Name of product"/>
        <input id="product-price" type="text" placeholder="Price" />
        <input id="file-container" type="file" />
        <input type="submit" onClick={this.uploadProductPhoto}/>


      </section>
    );
  }
}

export default Sell;


