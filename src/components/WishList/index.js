import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {CartWrapper, ProductList, MainHeading, CartItems, Row, ListItem, ProductImage, Image, ProductTitle, Price, Remove} from './WishListStyles.js';

import {BiX} from 'react-icons/bi';

import LoadingSpinner from '../../assests/Loaders/loader.js';

import {useDispatch, useSelector} from 'react-redux';
import { removeFromwList } from '../../redux/reducers/wlistReducer.js';

const WishList = ( ) => {

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wListItems = useSelector(state=>state.wishList.products)

  const remove = (item) => {
    dispatch(
      removeFromwList(item)
    );
  }

  return (
    <>
      {isLoading && <LoadingSpinner/>}
      <CartWrapper>
        <ProductList>
          <MainHeading>WishList</MainHeading>
          <CartItems>  
            {wListItems.length === 0 && <Row> List is Empty </Row>}
            {wListItems.map((product, i) => (
              <Row key={i}>
                <ListItem>
                  <ProductImage onClick={() => { navigate(`/details/${product.item.id}`)}}>
                    <Image src={product.item.image} alt="img"/>
                  </ProductImage>
                  <ProductTitle onClick={() => { navigate(`/details/${product.item.id}`)}}>{product.item.title}</ProductTitle>
                </ListItem>
                <Price>$ {product.item.price}</Price>
                <Remove onClick={() => remove(product)}><BiX/></Remove>
              </Row>
            ) 
            )}

          </CartItems>
        </ProductList>

      </CartWrapper>
    </>
  )
}

export default WishList