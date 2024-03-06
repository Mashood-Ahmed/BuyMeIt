import styled from 'styled-components';
const primary =  require('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


export const CartWrapper = styled.div`
    margin: 0;
    padding: 0.5rem;
    font-family: 'Montserrat', sans-serif;
`

export const ProductList = styled.div`
    padding: 0.5rem;
    min-width: 320px;
`

export const MainHeading = styled.h2`
    color: #000;
    font-size: 2rem;
`

export const CartItems = styled.div`
    margin-top: 0;
    padding: 0 0.5rem 0.5rem;
    max-height: 50vh;
    overflow-y: scroll;
    background: #CFD2CF; 

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
`

export const Row = styled.div`
    display: grid;
    column-gap: 0px;
    grid-template-columns: 70% 20% 30px;
    grid-gap: 0.5rem;
    padding: 5px;
    margin-top: 0.5rem;
    border-radius: 6px;
    height: auto;
    overflow: hidden;
    background: #fff;

    @media screen and (max-width: 480px){
        grid-template-columns: 45% 23% 23% 9%;
        grid-gap: 0.2rem;
    }
`

export const ListItem = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: 400px;
    padding: 0 8px 0 0;
    text-align: center;
    justify-content: center;
`

export const ProductImage = styled.div`
    display: flex;
    width: 70px;
    height: 100%;
    margin: auto 0;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    @media screen and (max-width: 768px){
        width: 50px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 70px;
    object-fit: contain;
`

export const ProductTitle = styled.p`   
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 5px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`

export const Amount = styled.p`
    font-size: 1.2rem;
    display: inline-block;
    padding: 0 0.5rem;
    margin: auto 0;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
        padding: 0 0.3rem;
    }
`

export const Price = styled.h3`
    margin: auto 0;

    @media screen and (max-width: 768px){
        text-align: right;
        font-size: 1rem;
    }

    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 0.8rem;
    }
`

export const Remove = styled.i`
    font-size: 2rem;
    color: #EB1D36;
    text-align: left;
    margin: auto 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        font-size: 2.2rem
    }

    @media screen and (max-width: 786px){
        font-size: 1rem;
        
        &:hover{
            font-size: 1.2rem
        }
    }
`

