import styled from "styled-components";

export const SliderContainer = styled.div`
  /*display: grid;
    grid-template-columns: 60% 1fr;
    grid-gap: 0;*/
  display: flex;
  max-height: 400px;
  height: auto;
  background: #fff;
  width: 100%;
  min-width: 320px;
  object-fit: cover;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const Text = styled.div`
  background: linear-gradient(to right, #cfd2cf, #fff);
  font-size: 2rem;
  color: #eb1d36;
  padding: 5rem;
  font-family: Helvatica, sans-serif;

  @media screen and (max-width: 920px) {
    font-size: 1.5rem;
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  /*@media screen and (max-width: 920px){
        max-height: 200px;
    }

    @media screen and (max-width: 768px){
        max-height: 150px;
    }*/
`;
