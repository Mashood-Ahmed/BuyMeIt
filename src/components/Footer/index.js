import React from 'react'
import {FooterContainer, FooterWrapper, FooterLinksWrapper, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink><br/>
                        <FooterLink to='/signin'>Testimonials</FooterLink><br/>
                        <FooterLink to='/signin'>Careers</FooterLink><br/>
                        <FooterLink to='/signin'>Investors</FooterLink><br/>
                        <FooterLink to='/signin'>Terms of Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/signin'>Submit Video</FooterLink><br/>
                        <FooterLink to='/signin'>Ambassadors</FooterLink><br/>
                        <FooterLink to='/signin'>Agency</FooterLink><br/>
                        <FooterLink to='/signin'>Influencers</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/signin'>Contact</FooterLink><br/>
                        <FooterLink to='/signin'>Support</FooterLink><br/>
                        <FooterLink to='/signin'>Destinations</FooterLink><br/>
                        <FooterLink to='/signin'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Facebook</FooterLink><br/>
                        <FooterLink to='/'>Instagram</FooterLink><br/>
                        <FooterLink to='/'>Youtube</FooterLink><br/>
                        <FooterLink to='/'>Twitter</FooterLink><br/>
                        <FooterLink to='/'>Linked In</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>BuyMeIt</SocialLogo>
                    <WebsiteRights>BuyMeIt © 
                     All Rights Reserved 2022</WebsiteRights>
                     <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'> <FaFacebook/> </SocialIconLink>
                        <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'> <FaInstagram/> </SocialIconLink>
                        <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'> <FaYoutube/> </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'> <FaTwitter/> </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='LinkedIn'> <FaLinkedin/> </SocialIconLink>
                     </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
    </>
  )
}

export default Footer