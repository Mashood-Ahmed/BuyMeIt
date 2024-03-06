import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {FaStar, FaShoppingCart, FaBackward} from 'react-icons/fa';
import {MdOutlineSubject, MdArrowBackIos} from 'react-icons/md';

import {Header, Back} from '../Details/DetailsStyles';
import { Section, Heading, ProductsWrapper, Row, Card, ProductImage, ProductInfo, Title, Rating, Reviews, Price, SeeMore, ImageContainer, Events, Button, Icon} from '../ProductsSection/ProductionsSection';

import { addCartItem } from '../../redux/reducers/cartReducer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FilteredItems = ({title, products}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleClick = (item) => {
      dispatch(
        addCartItem({ item, quantity, price:item.price })
      );
      toast("Item Added to Cart");
  };

  return (
    <>
    <Header>
        <Back to="/"><MdArrowBackIos/></Back>
    </Header>
    <ToastContainer
        position='top-center'
        autoClose={100}
        hideProgressBar={true}
    />
    <Section>
        <Heading>{title}</Heading>
        <ProductsWrapper>
            <Row>
            {products.map((product) => (
                <Card key={product.id} product={product}>
                <ImageContainer>
                    <ProductImage src={product.image} alt="img"/>
                </ImageContainer>
                <ProductInfo>
                    <Title>{product.title}</Title>
                    <Rating>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    <Reviews> {product.rating.count} </Reviews>
                    </Rating>
                    <Price> $ {product.price} </Price>           
                </ProductInfo>
                <Events>
                    <Button className='details' onClick={() => { navigate(`/details/${product.id}`)}}> <Icon> <MdOutlineSubject /> </Icon>  Details </Button>
                    <Button onClick={() => handleClick(product)}> <Icon> <FaShoppingCart  /> </Icon> Add to Cart </Button>
                </Events>
                </Card>
            ))}
            </Row>
        </ProductsWrapper>
    </Section>
    </>
  )
}

export default FilteredItems