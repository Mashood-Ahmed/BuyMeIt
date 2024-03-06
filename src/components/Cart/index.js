import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {CartWrapper, ProductList, MainHeading, CartItems, Row, ListItem, ProductImage, Image, ProductTitle, Quantity, Counter,  Amount, Price, Remove} from './CartStyles.js';
import { Pricing, Heading, PricingTable, PricingRow, PricingItem, Voucher, Code, SubmitVoucher, CheckOut} from './CartStyles.js';

import {BiPlus, BiMinus, BiX} from 'react-icons/bi';
import {IoBagCheckOutline} from 'react-icons/io5';

import LoadingSpinner from '../../assests/Loaders/loader.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useDispatch, useSelector} from 'react-redux';
import { Inc, Dec, removeFromCart, submitCart } from '../../redux/reducers/cartReducer.js';

const Cart = ( ) => {

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state=>state.cart.products);
  const state = useSelector(state=>state.cart);

  const  qtyUp = (item) => {
    dispatch(
      Inc(item)
    );
  }

  const  qtyDown = (item) => {
    dispatch(
      Dec(item)
    );
  }

  const remove = (item) => {
    dispatch(
      removeFromCart(item)
    );
  }

  const handleCheckOut = (data) => {
      setIsLoading(true);

      setTimeout(() => {
        if(data.length > 0){
          dispatch(
            submitCart()
          )
          toast("Thank You For Your Order");
          setIsLoading(false);
        }else{
          toast("Cart is Empty");
          setIsLoading(false);
        }
        setTimeout(() => {navigate('/');}, 1000);
      }, 1000);
  }

  return (
    <>
      {isLoading && <LoadingSpinner/>}
      <ToastContainer
          position='top-center'
          autoClose={700}
          hideProgressBar={true}
      />
      <CartWrapper>
        <ProductList>
          <MainHeading>Cart</MainHeading>
          <CartItems>  
            {cartItems.length === 0 && <Row> Cart is Empty </Row>}
            {cartItems.map((product, i) => (
              <Row key={i}>
                <ListItem>
                  <ProductImage>
                    <Image src={product.item.image} alt="img"/>
                  </ProductImage>
                  <ProductTitle>{product.item.title}</ProductTitle>
                </ListItem>
                <Quantity>
                  <Counter onClick={() => qtyUp(product)}><BiPlus/></Counter>
                  <Amount>{product.quantity}</Amount>
                  <Counter onClick={() => qtyDown(product)}><BiMinus/></Counter>
                </Quantity>
                <Price>$ {(product.price * product.quantity).toFixed(2)}</Price>
                <Remove onClick={() => remove(product)}><BiX/></Remove>
              </Row>
            ) 
            )}

          </CartItems>
        </ProductList>

        {cartItems.length > 0 && 

        <Pricing>
          <Heading>Total</Heading>
          <PricingTable>
            <PricingRow>
              <PricingItem>Net Price</PricingItem>
              <PricingItem>Discount</PricingItem>
              <PricingItem>Shipping</PricingItem>
              <PricingItem>Total Amount</PricingItem>
            </PricingRow>
            <PricingRow>
              <PricingItem>$ {(state.total).toFixed(2)}</PricingItem>
              <PricingItem>$ {state.discount}</PricingItem>
              <PricingItem>$ {state.shipping}</PricingItem>
              <PricingItem>$ {(state.total + state.discount + state.shipping).toFixed(2)}</PricingItem>
            </PricingRow>
          </PricingTable>
          <Voucher> 
            <Code type='text' placeholder='Enter Voucher Code Here...'></Code>
            <SubmitVoucher type='submit'>Submit</SubmitVoucher>
          </Voucher>
          <CheckOut type='submit' onClick={() => handleCheckOut(cartItems)}>
            <IoBagCheckOutline/> <p style={{fontSize: '1rem'}}>CheckOut</p>
          </CheckOut>
        </Pricing>}

      </CartWrapper>
    </>
  )
}

export default Cart