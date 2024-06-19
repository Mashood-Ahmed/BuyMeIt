import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  height: auto;
  background: white;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
`;

export const Header = styled.nav`
  width: 100%;
  height: 20px;
  color: #727272;
  text-transform: uppercase;
  padding: 10px 0;
  border-bottom: 2px solid #efefef;
  font-size: 12px;
  overflow: hidden;
`;

export const Back = styled(Link)`
  float: left;
  font-size: 20px;
  margin-left: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #212121;
    transform: scale(1.5);
  }
`;

export const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-gap: 0;
  /*overflow: hidden;*/

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  width: auto;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 10px 50px 0;
  }
`;

export const Image = styled.img`
  padding-left: 15px;
  width: 240px;
  height: auto;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: 90%;
    height: 100%;
    transform: translate(0, 0);
  }
`;

export const Description = styled.div`
  padding: 50px;
  background: #cfd2cf;
  border-left: 2px solid #efefef;

  @media screen and (max-width: 768px) {
    float: none;
    width: auto;
    padding: 30px;
  }
`;

export const Title = styled.h2`
  color: #515151;
  margin: 0;
  text-transform: uppercase;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Tags = styled.div`
  width: auto;
  height: auto;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  padding: 5px 8px;
  background: #a2b5bb;
  font-size: 12px;
  color: #212121;
  margin-right: 5px;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    background: #7d9d9c;
  }
`;

export const Price = styled.h1`
  color: #515151;
  font-weight: 300;
  padding-top: 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 300;
`;

export const Desc = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #727272;
  text-align: justify;
  padding: 20px 0;
  margin: 0;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #515151;
  padding: 8px 0px;
  margin-bottom: 30px;
  color: #515151;
  text-transform: uppercase;
  width: 125px;
  font-family: inherit;
  margin-right: 5px;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #eb1d36;
    color: #cfd2cf;
    border: 1px solid #cfd2cf;
    background: #a2b5bb;
    cursor: pointer;
  }
`;

export const Icon = styled.i`
  position: relative;
  top: 2px;
  font-size: 13px;
  margin-right: 10px;
  border: none;
  outline: none;
  background: none;
  color: #eb1d36;
  cursor: pointer;
`;
