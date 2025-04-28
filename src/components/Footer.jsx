import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.webp";

const FooterSection = styled.footer`
  width: 100%;
  background-color: white;
  padding: 3rem 2rem;
  color: #333;
  font-family: "Helvetica Neue", Arial, sans-serif;

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  max-width: 300px;

  @media (max-width: 992px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Logo = styled.div`
  margin-bottom: 1rem;

  img {
    height: 60px;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;

    img {
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 45px;
    }
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  color: #555;
  max-width: 220px;

  @media (max-width: 768px) {
    max-width: 260px;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BookButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 1.5px solid #000;
  border-radius: 30px;
  text-decoration: none;

  color: #000;
  font-weight: 400;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.6rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1.25rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const LinksSection = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;

    gap: 1.5rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
`;
const LinkColumn = styled.div`
  @media (max-width: 480px) {
    &:nth-child(3) {
      grid-column: span 2;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 1.25rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.4rem;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #777;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;

  &:hover {
    color: #5c899d;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DividerLine = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 1.25rem 0;
  }
`;

const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const ContactSection = styled.div``;

const ContactTitle = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }
`;

const ContactDetail = styled.p`
  font-size: 1rem;

  font-weight: 400;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }
`;

const ActionLink = styled.a`
  text-decoration: none;

  color: #000;
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0.3px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MapLink = styled.a`
  display: inline-block;
  color: #777;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  &:hover {
    color: #5c899d;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const AddressSection = styled.div`
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.25rem;
  }
`;

const AddressTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #777;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

const LocationsSection = styled.div``;

const LocationsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
  }
`;

const LocationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LocationItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #777;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }
`;

const BottomSection = styled.div`
  text-align: left;
  font-size: 0.85rem;
  color: #777;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <TopSection>
          <LogoSection>
            <Logo>
              <img src={logo} alt="PK Photography Logo" />
            </Logo>
            <Tagline>
              Capturing Life's Moments with Passion and Precision
            </Tagline>
            <BookButton href="/book">BOOK NOW</BookButton>

            <SocialLinks>
              <SocialIcon href="https://instagram.com" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
            </SocialLinks>
          </LogoSection>

          <LinksSection>
            <LinkColumn>
              <ColumnTitle>Services</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="/services/portfolio">Portfolio</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/services/portrait">Portrait</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/services/headshot">Headshot</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/services/celebrity">Celebrity</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/services/interior">Interior</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/services/ecommerce">E-Commerce</FooterLink>
                </LinkItem>
              </LinksList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Videography</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="/videography/wedding">
                    Wedding & Events
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/videography/livestreaming">
                    Live Streaming
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/videography/corporate">
                    Corporate Ads
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/videography/product">
                    Product Ads
                  </FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/videography/influencer">
                    Influencer Videos
                  </FooterLink>
                </LinkItem>
              </LinksList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Navigate</ColumnTitle>
              <LinksList>
                <LinkItem>
                  <FooterLink href="/clients">Clients</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/bookings">Bookings</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/gallery">Gallery</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/blog">Blog</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/careers">Careers</FooterLink>
                </LinkItem>
                <LinkItem>
                  <FooterLink href="/talent">Talent</FooterLink>
                </LinkItem>
              </LinksList>
            </LinkColumn>
          </LinksSection>
        </TopSection>

        <DividerLine />
        {/* Middle section with contact information */}
        <MiddleSection>
          <ContactSection>
            <ContactTitle>Want to book with us?</ContactTitle>
            <ContactDetail>General inquiries</ContactDetail>

            <ActionLink href="mailto:prabhakar@pkphotography.in">
              prabhakar@pkphotography.in
            </ActionLink>
          </ContactSection>

          <ContactSection>
            <ContactTitle>Want to be a member of our talent team?</ContactTitle>
            <ContactDetail>Become a Model</ContactDetail>
            <ActionLink href="/join-talent">Join here</ActionLink>
          </ContactSection>
        </MiddleSection>

        <MapLink
          href="https://goo.gl/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on maps
        </MapLink>

        <AddressSection>
          <AddressTitle>Our Studio</AddressTitle>
          <Address>
            C 1302 EVERSHINE COSMIC
            <br />
            Opp. Infiniti Mall, Veera Desai Industrial Estate
            <br />
            Andheri West, Mumbai, Maharashtra 400053
            <br />
            Tel: +91 8888766739
          </Address>
        </AddressSection>

        <LocationsSection>
          <LocationsTitle>We are active in</LocationsTitle>
          <LocationsList>
            <LocationItem>Mumbai</LocationItem>
            <LocationItem>Dubai</LocationItem>
            <LocationItem>Delhi</LocationItem>
          </LocationsList>
        </LocationsSection>

        <DividerLine />

        <BottomSection>
          © {new Date().getFullYear()} PK Photography. All rights reserved.
        </BottomSection>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
