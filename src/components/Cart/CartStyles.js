import styled from "styled-components";

export const CartWrapper = styled.div`
  margin: 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 70% 30%;
  font-family: "Montserrat", sans-serif;
  grid-gap: 0;

  @media screen and (max-width: 786px) {
    display: block;
  }
`;

export const ProductList = styled.div`
  padding: 0.5rem;
  min-width: 320px;
`;

export const MainHeading = styled.h2`
  color: #000;
  font-size: 2rem;
`;

export const CartItems = styled.div`
  margin-top: 0;
  padding: 0 0.5rem 0.5rem;
  max-height: 50vh;
  overflow-y: scroll;
  background: #cfd2cf;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Row = styled.div`
  display: grid;
  column-gap: 0px;
  grid-template-columns: 50% 20% 20% 30px;
  grid-gap: 0.5rem;
  padding: 5px;
  margin-top: 0.5rem;
  border-radius: 6px;
  height: auto;
  overflow: hidden;
  background: #fff;

  @media screen and (max-width: 480px) {
    grid-template-columns: 45% 23% 23% 9%;
    grid-gap: 0.2rem;
  }
`;

export const ListItem = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 400px;
  padding: 0 8px 0 0;
  text-align: center;
  justify-content: center;
`;

export const ProductImage = styled.div`
  display: flex;
  width: 70px;
  height: 100%;
  margin: auto 0;
  float: left;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70px;
  object-fit: contain;
`;

export const ProductTitle = styled.p`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 5px;
  text-align: left;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  padding: 0;
  text-align: center;
  justify-content: center;
  margin-left: 0.5rem;
`;

export const Counter = styled.button`
  border: none;
  height: 1.2rem;
  margin: auto 0;
  padding: 0;
  background: #eb1d36;
  display: inline-block;
  font-size: 1.2rem;
  color: #cfd2cf;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    &:hover {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;

    &:hover {
      font-size: 1rem;
    }
  }
`;

export const Amount = styled.p`
  font-size: 1.2rem;
  display: inline-block;
  padding: 0 0.5rem;
  margin: auto 0;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0 0.3rem;
  }
`;

export const Price = styled.h3`
  margin: auto 0;

  @media screen and (max-width: 768px) {
    text-align: right;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const Remove = styled.i`
  font-size: 2rem;
  color: #eb1d36;
  text-align: left;
  margin: auto 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 786px) {
    font-size: 1rem;

    &:hover {
      font-size: 1.2rem;
    }
  }
`;

export const Pricing = styled.div`
  padding: 0.5rem;

  @media screen and (max-width: 480px) {
    min-width: 320px;
  }
`;

export const Heading = styled.h2`
  color: #000;
  font-size: 2rem;
`;
export const PricingTable = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.1rem;
  padding: 0.3rem;
  background: #cfd2cf;
`;

export const PricingRow = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const PricingItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;

  &:last-child {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media screen and (max-width: 975px) {
    font-size: 0.9rem;
    &:last-child {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 765px) {
    font-size: 1rem;
    &:last-child {
      font-size: 1.5rem;
    }
  }
`;

export const Voucher = styled.div`
  background: #cfd2cf;
  padding: 0.3rem;
  padding-bottom: 1rem;
`;

export const Code = styled.input`
  width: 60%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const SubmitVoucher = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
`;

export const CheckOut = styled.button`
  display: inline-block;
  padding: 0.5rem;
  margin: 0.8rem 0;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;
  background: #888;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #eb1d36;
  }

  @media screen and (max-width: 765px) {
    min-width: 320px;
  }
`;
