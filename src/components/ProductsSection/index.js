import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {FaStar, FaShoppingCart} from 'react-icons/fa';
import {MdOutlineSubject} from 'react-icons/md';

import { Section, Heading, ProductsWrapper, Row, Card, ProductImage, ProductInfo, Title, Rating, Reviews, Price, SeeMore, ImageContainer, Events, Button, Icon} from './ProductionsSection';

import { addCartItem } from '../../redux/reducers/cartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsSection = ({ title, darkBg, products }) => {  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleClick = (item) => {
      dispatch(
        addCartItem({ item, quantity, price:item.price })
      );
      toast("Item Added to Cart");
  };
  
  const allProds = () => {
    navigate('products', { 
      state: { 
        title: title,
        residue: products 
      } 
    })
  }

  return (    
    <>
        <ToastContainer
          position='top-center'
          autoClose={100}
          hideProgressBar={true}
        />
        <Section darkbg={darkBg}>
          <Heading darkbg={darkBg}>{title}</Heading>
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
                      <Button 
                      className='details' 
                      onClick={() => { navigate(`/details/${product.id}`)}}
                      > <Icon> <MdOutlineSubject /> </Icon>  Details </Button>
                      <Button onClick={() => handleClick(product)}> <Icon> <FaShoppingCart  /> </Icon> Add to Cart </Button>
                    </Events>
                  </Card>
                ))}
              </Row>
            </ProductsWrapper>
          <SeeMore onClick={allProds}  darkbg={darkBg.toString()}>Show More</SeeMore>
        </Section>
    </>
  )
}

export default ProductsSection