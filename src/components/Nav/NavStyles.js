import styled from 'styled-components';
import {Link} from 'react-router-dom';
const primary =  require('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')

export const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`

export const Nav = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr 25%;
    grid-gap: 0;
    background-color: #CFD2CF;
    min-width: 320px;

    @media screen and (max-width: 770px){
        grid-template-columns: 70px 50% 30%;
    }

    @media screen and (max-width: 610px){
        grid-template-columns: 70px 60% 20%;
    }
`

export const LogoWrapper = styled(Link)`
    padding: 0 5px;
    cursor: pointer;
`

export const Logo = styled.img`
    float: left;
    width: 60px;
    height: 100px;
`

export const SearchContainer = styled.div`
    display: grid;
    grid-template-row: 20px auto;
    margin-top: 30px;
    height: 40px;
    width: 100%;

    @media screen and (max-width: 768px){
        margin-top: 40px;
    }
`
export const Form = styled.form`
    border: none;
    width: 90%;
    margin: auto 0 auto auto;
    white-space: nowrap;
    display: flex;
    flex: 1;

    @media screen and (max-width: 768px){
        margin-top: 0;
    }
`

export const SearchBar = styled.input`
    margin: auto 0 auto auto;
    padding: 6px;
    font-size: 17px;
    width: 100%;
    height: 20px; 
    background: #A2B5BB;
    color: #000;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: none;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 790px){
        width: 100%;
    }
`

export const SearchButton = styled.button`
    height: 32px;
    width: 30px;
    background: #A2B5BB;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 16.5px;
    cursor: pointer;

    &:hover{
        background: #8b8b8b;
    }
`


export const SearchResults = styled.div`
    display: block;
    font-size: 17px;
    width: 90%;
    height: auto;
    max-height: 100%;
    margin: 0 0 0 auto;
    padding: 0.5rem 0;
    background: #fff;
    color: #000;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media screen and (max-width: 770px){
        width: 90%;
    }
` 

export const Result = styled.p`
    display: block;
    color: #000;
    font-size: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    width: 90%;
    cursor: pointer;

    &:hover{
        background: linear-gradient(to right, rgba(207, 210, 207, 0.5) 75%, #fff);
    }

    &.no-results{
        color: grey;
        cursor: default;
        &:hover{
            background: none;
        }
    }
`

export const Bucket = styled.div`
    padding: 25px 1rem;
    
    @media screen and (max-width: 770px){
        padding: 25px 0;
    }

`

export const Icon = styled.i`
    float: right;
    color: #A2B5BB;
    margin-left: 1rem;
    font-size: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: grey;
    }

    @media screen and (max-width: 770px){
        font-size: 2rem;
        position: relative;
        margin-top: .9rem;
    }

    @media screen and (max-width: 340px){
        position: relative;
        margin-left: 0.3rem;
        right: 0;
    }
`

export const Badge = styled.div`
    position: relative;
    bottom: 60px;
    left: 35px;
    padding-top: 3px;
    width: 20px;
    height: 17px;
    border-radius: 100%;
    border: none;
    background: #EB1D36;
    color: #ececec;
    font-size: 12px;
    font-weight: bold;
    font-style: none;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 770px){
        bottom: 45px;
        left: 23px;
    }
`

export const Button = styled.button`
    float: right;
    padding: 0.5rem 0.5rem;
    margin: 0.1rem 1rem;
    background: #A2B5BB;
    color: #212121;
    font-size: 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background: grey;
    }

    @media screen and (max-width: 770px){
        font-size: 13px;
        padding: 0.5rem 0.2rem;
        width: 50px;
        margin-top: 15px;
    }

    @media screen and (max-width: 610px){
        display: none;
    }
`

export const SubNav = styled.div`
    background: #EB1D36;
    min-width: 320px;
`

export const Categories = styled.i`
    float: left;
    color: #dddddd;
    font-size: 20px;
    padding: 0.3rem 0.8rem;
    cursor: pointer;

    &:hover{
        color: #212121;
    }

    @media screen and (max-width: 460px){
        font-size: 15px;
        padding: 0.2rem 0.5rem;
    }
`

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export const ListItem = styled.li`
    float: left;

    &:hover{
        background: #212121;
    }
`

export const Page = styled.a`
    display: block;
    text-decoration: none;
    font-size: 18px;
    color: #dddddd;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        font-size: 15px;
        padding: 0.2rem 0.5rem;
    }

    @media screen and (max-width: 460px){
        font-size: 12px;
        padding: 0.2rem 0.5rem;
    }
`