import React, {useState} from 'react'

import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer  from '../components/Footer';

import WishList from '../components/WishList';

const WishListScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
      setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop/>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={!isOpen} toggle={toggle}/>
      <WishList/>
      <Footer/>
    </>
  )
}

export default WishListScreen