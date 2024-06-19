import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: ${({ darkbg }) => (darkbg ? "#413F42" : "#CFD2CF")};
  font-family: "Montserrat", sans-serif;
  padding: 1.5rem 0;
  min-width: 320px;
  border-bottom: solid #efefef;
`;
export const Heading = styled.h1`
  padding: 1rem 2rem;
  text-align: center;
  color: ${({ darkbg }) => (darkbg ? "#CFD2CF" : "#413F42")};
`;

export const ProductsWrapper = styled.div`
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px 1.5rem;
  justify-content: center;

  @media screen and (max-width: 710px) {
    padding: 0 10px 1.5rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.8rem;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.8rem;
  }

  @media screen and (max-width: 525px) {
    grid-gap: 0.4rem;
  }
`;
export const Card = styled.div`
  width: 200;
  height: 425px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    transform: scale(1.02);
  }

  @media screen and (max-width: 710px) {
    height: 270px;
  }

  @media screen and (max-width: 525px) {
    height: 152px;
    margin-bottom: 1rem;
  }
`;
export const ImageContainer = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 1rem;
  width: auto;
  height: 300px;

  @media screen and (max-width: 710px) {
    height: 150px;
  }

  @media screen and (max-width: 525px) {
    height: 78px;
    padding: 0.5rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: 100%;
`;

export const ProductInfo = styled.div`
  height: 100px;
  padding: 10px 0.8rem;
  padding-right: 1rem;
  background: #a2b5bb;
  text-align: left;
`;

export const Title = styled.div`
  height: 25px;
  font-weight: 400;
  overflow: hidden;
  padding-bottom: 0.5rem;

  &:hover {
    color: grey;
    text-decoration: underline;
  }

  @media screen and (max-width: 710px) {
    font-size: 14px;
  }

  @media screen and (max-width: 525px) {
    height: 12px;
    font-size: 8px;
  }
`;

export const Rating = styled.i`
  font-size: 12px;
  color: gold;
  display: flex;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 525px) {
    font-size: 8px;
    padding-bottom: 0.2rem;
  }
`;

export const Reviews = styled.p`
  font-size: 12px;
  margin-left: 1rem;
  color: grey;

  @media screen and (max-width: 525px) {
    font-size: 8px;
  }
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.1rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;

  @media screen and (max-width: 710px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 525px) {
    font-size: 0.6rem;
  }
`;

export const Events = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  height: 450px;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
  align-content: center;
  z-index: 1;
  transition: all 0.5s ease-in-out;

  ${Card}:hover & {
    bottom: 450px;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 710px) {
    height: 300px;

    ${Card}:hover & {
      bottom: 300px;
      transition: all 0.5s ease-in-out;
    }
  }

  @media screen and (max-width: 525px) {
    height: 250px;

    ${Card}:hover & {
      bottom: 250px;
      transition: all 0.5s ease-in-out;
    }
  }
`;

// export const Details = styled(Link)`
//     float: right;
//     width: 100%;
//     margin: 1rem 2rem;
//     background: #94B49F;
//     padding: 0.5rem 0.7rem 0.5rem;
//     font-size: 1rem;
//     text-decoration: none;
//     text-align: center;
//     border: none;
//     color: #fff;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out;

//     &:hover{
//         transform: scale(1.05);
//         background: #413F42;
//     }

//     @media screen and (max-width: 710px){
//         margin: 0.5em 1rem;
//     }

//     @media screen and (max-width: 525px){
//         margin: 0.2rem 0.5rem;
//         padding: 0.2rem 0.2rem 0.2rem;
//         font-size: 0.8rem;
//     }
// `

export const Button = styled.button`
  float: right;
  width: 100%;
  margin: 1rem 2rem;
  background: #eb1d36;
  padding: 0.5rem 0.7rem 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.details {
    background: #94b49f;
  }

  &:hover {
    transform: scale(1.05);
    background: #413f42;
  }

  @media screen and (max-width: 710px) {
    margin: 0.5em 1rem;

    &.addToCart {
      padding: 0.2rem 0.3rem 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 525px) {
    margin: 0.2rem 0.5rem;
    padding: 0.2rem 0.2rem 0.2rem;
    font-size: 0.8rem;

    &.addToCart {
      font-size: 0.7rem;
      padding: 0.2rem 0.2rem 0.2rem;
    }
  }
`;

export const Icon = styled.i`
  position: relative;
  font-size: 1.5rem;
  top: 5px;
  padding-right: 0.5rem;

  @media screen and (max-width: 525px) {
    font-size: 0.7rem;
    top: 2px;
  }
`;

export const SeeMore = styled.button`
  display: block;
  text-decoration: none;
  padding: 0.5rem;
  width: 6rem;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  background: ${({ darkbg }) => (darkbg ? "#A2B5BB" : "#413F42")};
  color: #fff;
  font-size: 15px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: grey;
  }

  @media screen and (max-width: 525px) {
    font-size: 10px;
  }
`;
