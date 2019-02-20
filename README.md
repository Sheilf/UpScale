This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) & Firebase (www.firebase.google.com)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `firebase deploy`

Deploys to your firebase project to project.firebaseapp.com & your configured domain name with Firebase Hosting.

See more: https://firebase.google.com/docs/hosting/deploying

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

### `Components'

  <b>Routes</b>

  <ul>
    <li>index</li>
    <li>App</li>
    <li>Nav</li>
    <li>Store</li>
    <li>Cart</li>
    <li>MarketPlace</li>
    <li>Sell</li>
    <li>Construction</li>
  </ul>

  <b>Subcomponents </b>
  <ul>
    <li>Home</li>
    <li>Banner</li>
    <li>GoogleSignIn</li>
    <li>Product</li>
    <li>GenericComponent</li>
  </ul>    


  ### 'render App'

  <code>
    <Index> Root
      <BrowserRouter>
        <Nav/>
        <Route to App />
        <Route to Store />
        <Route to Cart />
        <Route to Marketplace />
        <Route to Sell />
        <Route to Construction />
      </BrowserRouter>
      
      <Nav>
          <Link to cart />
          <Link to App />
          <Link to Store />
          <Link to Marketplace />
          <Link to Store />
          <Link to Construction -> Contact />

          <GoogleSignIn />
      </Nav>
      
      <App>
        <Home>
          <Banner banner="home-banner" />
          <form>
        </Home>
      </App>

      
      <Store>
        <Product />
      </Store>


      <Marketplace>
        <Link to Sell>
        <list of Products submitted from Sell
      </Marketplace>
      
      <Sell>
        <form>
      </Sell>

    
      <Construction for Contact>
          <form>
          <contact data>
      </Contact>
  
    
    </Index>
  

    <utility>
      <styles>
         <Bootstrap>
            slate.css
         </Bootstrap>

        flexborder.css
        global.css          
      </styles>
      
      <assets>
        <icons>
        <images>
        <logo>
    
      </assets>

    </utility>
  </code>
