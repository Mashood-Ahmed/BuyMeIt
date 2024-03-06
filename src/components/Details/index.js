import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Card, Header, Back, Body, ImageWrapper, Image, Description, Title, Tags, Tag, Price, Desc, Button, Icon} from './DetailsStyles';

import {FaHeart} from 'react-icons/fa';
import {MdArrowBackIos } from 'react-icons/md';

import { Products1, Products2 } from '../ProductsSection/ProductsCollection';

import { addCartItem } from '../../redux/reducers/cartReducer';
import { addwListItem } from '../../redux/reducers/wlistReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    
    const id = window.location.pathname.split("/").pop();
    let product = Products1.find((x) => x.id == id);
    if(!product){
            product = Products2.find((x) => x.id == id);
    }

    const alertMsg = useSelector(state=>state.wishList.msg);
    
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleClick = (loc, item) => {
        if (loc == 1){
          dispatch(
            addCartItem({ item, quantity, price:item.price })
          );
          toast("Item Added to Cart");
        }else{
          dispatch(
            addwListItem({ item })
          );
        }
      };

    // const handleClick = (item) => {
    //     dispatch(
    //         addCartItem({ item, quantity, price:item.price })
    //     );
    //     toast("Item Added to Cart");
    // };

    return (
    <>
        <ToastContainer
          position='top-center'
          autoClose={100}
          hideProgressBar={true}
        />
        <Card>
            <Header>
                <Back to="/"><MdArrowBackIos/></Back>
            </Header>
            <Body>
                <ImageWrapper>
                    <Image src={product.image}/>
                </ImageWrapper>
                <Description>
                    <Title>{product.title}</Title>
                    <Tags>
                        {product.category.map((data, i) => (
                            <Tag to="/" key={i}>{data}</Tag>
                        ))}
                    </Tags>
                    <Price>$ {product.price}</Price>
                    <Desc>{product.description}</Desc>
                    <Button onClick={() => handleClick(1, product)}>Add To Cart</Button>
                    <Button onClick={() => handleClick(2, product)}> <Icon><FaHeart/></Icon> Wishlist</Button>
                </Description>
            </Body>
        </Card>
    </>
  )
}

export default Details