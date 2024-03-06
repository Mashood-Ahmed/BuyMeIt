import React, {useState} from 'react'

import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer  from '../components/Footer';

import FilteredItems from '../components/FilteredItems.js'
import { useLocation } from 'react-router-dom';

const Products = () => {

  const location = useLocation();

  const title = location.state.title;
  const residue = location.state.residue;

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
      setIsOpen(!isOpen);
  };

  console.log(residue);
  return (
    <>
      <ScrollToTop/>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={!isOpen} toggle={toggle}/>
      <FilteredItems title={title} products={residue}/>
      <Footer/>
    </>
  )
}

export default Products