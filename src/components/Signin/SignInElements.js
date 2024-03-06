import styled from 'styled-components';
import {Link} from 'react-router-dom';
const primary =  require('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 320px;
    max-width: 448px;
    margin: 0 auto;
    background: #CFD2CF;
    border-radius: 10px;
    padding-bottom: 1rem;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @media screen and (max-width: 400px){
        top: 0;
        transform: translate(-50%, 0);
    }
`

export const Header = styled.div`
    text-align: center;
    background: #fff;
    font-size: 1.5rem;
    padding: 2rem 0;

    &.up{
        padding: 1rem 0;
    }
`

export const Logo = styled.div`
    width: 250px;
    height: 150px;
    margin: 0 auto;
    cursor: pointer;
`

export const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`

export const Body = styled.div`
    margin: 1rem;
`

export const Input = styled.input`
    width: 96%;
    min-width: 320px;
    padding: 0.7rem 0.5rem;
    font-size: 1rem;
    background: rgba(49, 53, 82, 0.3);
    color: #fff;
    margin: 0.5rem auto;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &::placeholder{
        color: #CFD2CF;
    }

    &:focus{
        background: #fff;
        color: #000;
        outline: none;
        border-color: rgba(49, 53, 82, 0.5);
        box-shadow: 0 0 12px rgba(49, 53, 82, 0.7);
    }
`

export const Footer = styled.div`
    text-align: center;
    padding: 0 1rem;
    margin: 0;
`

export const Anchor = styled(Link)`
    display: block;
    font-size: 0.8rem;
    text-decoration: none;
    color: #000;

    &.forgetPassword{
        text-align: left;
        &:hover{
            text-decoration: underline;
        }
    }

    &.shift{
        span{
            font-weight: bold;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`
export const Button = styled.button`
    margin: .5rem auto;
    width: 100%;
    padding: 0.7rem 0.5rem;
    background: rgba(49, 53, 82, 0.5);
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: rgb(49, 53, 82);
    }
`