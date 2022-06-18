import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaCopyright,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterLink,
    FooterLinksContainer,
    FooterLinksItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    SocialIcon,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRight,
} from './FooterElement';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
            Join Our exclusive membership to receive the latest news and trends
            on our fashion.
                    </FooterSubHeading>
                    <FooterSubText>You can unsubscribe at anytime.</FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/sign-up">Testimonials</FooterLink>
                            <FooterLink to="/sign-up">Careers</FooterLink>
                            <FooterLink to="/sign-up">Investors</FooterLink>
                            <FooterLink to="/sign-up">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">Contact</FooterLink>
                            <FooterLink to="/sign-up">Support</FooterLink>
                            <FooterLink to="/sign-up">Careers</FooterLink>
                            <FooterLink to="/sign-up">Destinations</FooterLink>
                            <FooterLink to="/sign-up">Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/sign-up">Submit Video</FooterLink>
                            <FooterLink to="/sign-up">Ambassadors</FooterLink>
                            <FooterLink to="/sign-up">Agency</FooterLink>
                            <FooterLink to="/sign-up">Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/sign-up">Instagram</FooterLink>
                            <FooterLink to="/sign-up">Facebook</FooterLink>
                            <FooterLink to="/sign-up">Youtube</FooterLink>
                            <FooterLink to="/sign-up">Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon />
              KFASHION
                        </SocialLogo>
                        <WebsiteRight>
              KFASHION <FaCopyright /> 2022
                        </WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </div>
    );
};

export default Footer;
