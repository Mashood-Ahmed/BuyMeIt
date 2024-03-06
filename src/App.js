import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Products from './screens/Products';
import ProductDetails from './screens/ProductDetail';
import CartScreen from './screens/CartScreen';
import WishListScreen from './screens/WishListScreen';
import SignIn from './components/Signin';
import SignUp from './components/Signup';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/details/:id" element={<ProductDetails/>}></Route>
          <Route path="/cart" element={<CartScreen/>}></Route>
          <Route path="/wishList" element={<WishListScreen/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
