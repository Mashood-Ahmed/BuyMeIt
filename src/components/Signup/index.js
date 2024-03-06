import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Container, Header, Logo, Image, Body, Input, Footer, Anchor, Button} from '../Signin/SignInElements';

const TopLogo = require('../../assests/logo.png');

const SignUp = () => {
    const navigate = useNavigate();
    
    const signed = () => {
        navigate('/');
    }

    const home = () => {
        navigate('/')
    }
return (
    <>
        <Container>
            <Header className='up'>
                <Logo>
                    <Image src={TopLogo} onClick={home} alt="ButMeIt"/>
                </Logo>
                Sign Up
            </Header>
            <Body>
                <Input type="text" placeholder='Username'/>
                <Input type="text" placeholder='Email'/>
                <Input type="password" placeholder='Password'/>
                <Input type="password" placeholder='Confirm Password'/>
            </Body>
            <Footer>
                <Button type='submit' onClick={signed}> Sign Up</Button>
                <Anchor to="/signin" className='shift'>Already have an account? <span> Sign In here </span> </Anchor>
            </Footer>
        </Container>
    </>
  )
}

export default SignUp