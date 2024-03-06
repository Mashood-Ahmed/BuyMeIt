import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { FaSearch, FaBars, FaShoppingCart, FaHeart } from 'react-icons/fa';

import {Container, Nav, LogoWrapper, Logo, Form, SearchContainer, SearchBar, SearchResults, Result, SearchButton, Bucket, Icon, Badge, Button, SubNav, Categories, List, ListItem, Page} from './NavStyles';

import {useSelector} from 'react-redux';

import _Categories from '../../sampleData/categories';

import {Products1, Products2} from '../ProductsSection/ProductsCollection';

const TopLogo = require('../../assests/logo.png');

const Navbar = ({toggle}) => {

  const cartQuantity = useSelector(state=>state.cart.quantity);
  const wListQuantity = useSelector(state=>state.wishList.quantity);

  const [onSearch, setOnSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(['No Results...']);

  const navigate = useNavigate();

  const tocart = () => {
    navigate('/cart');
  }

  const towlist = () => {
    navigate('/wishList');
  }

  const toReg = () => {
    navigate('/signin');
  }

  const BarToggler = (e) => {
    e.preventDefault();
    console.log();
    
    //complete function to redirect to products page with filtered item related to targeted category
    //problem: e.
    const ctg = e.target.innerHTML;
    const product = (Products1.concat(Products2))
                      .filter((prod) => {
                        prod.category.includes(ctg);
                      });
    navigate('/products', { title : ctg , residue: product} );

    if(onSearch){
      setOnSearch(!onSearch);
    }
  } 

  const getSearch = (e) => {
    e.preventDefault();

    if(e.target.value){
      setOnSearch(true);
    }else{
      setOnSearch(false);
    }

    const inp = e.target.value;
    if(inp.length > 0){
      const filteredCharacters = _Categories.filter(character => {
        return (
          character.startsWith(inp)
        );
      });
      setSearchResults(filteredCharacters);
    }
  }

  return (
    <Container>
      <Nav>
        <LogoWrapper to="/">
          <Logo src={TopLogo} alt="#"/>
        </LogoWrapper>
        <SearchContainer>
          <Form autocomplete="false">
            <SearchBar 
              placeholder="Search.." 
              name="search"
              onChange={getSearch}
              onBlur={BarToggler}
              autoComplete='off'
            >
            </SearchBar>
            <SearchButton type="submit"><FaSearch/></SearchButton>
          </Form>
          
          {onSearch && searchResults.length <= 0 && 
            <SearchResults>
              <Result className='no-results'>No results found...</Result>
            </SearchResults>
          }
          {onSearch && searchResults.length > 0 && 
            <SearchResults>
              {searchResults.map((result, i) => (
                <Result 
                onClick={BarToggler}
                key={i} 
                value={result}>
                  {result}
                </Result>
              ))}
            </SearchResults>
          }
        </SearchContainer>
        <Bucket>
          <Icon onClick={towlist}> 
            <FaHeart /> 
            <Badge> {wListQuantity} </Badge> 
          </Icon>
          <Icon onClick={tocart}> 
            <FaShoppingCart /> 
            <Badge> {cartQuantity} </Badge> 
          </Icon>
          <Button onClick={toReg}>Sign In</Button>
        </Bucket>
      </Nav>
      <SubNav>
        <Categories onClick={toggle}><FaBars/></Categories>
        <List>
          <ListItem><Page to="/">Deals</Page></ListItem>
          <ListItem><Page to="/">Customer Service</Page></ListItem>
          <ListItem><Page to="/">Promo Codes</Page></ListItem>
          <ListItem><Page to="/">Services</Page></ListItem>
        </List>
      </SubNav>
    </Container>
  )
}

export default Navbar