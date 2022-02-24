import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  EndDiv,
} from "./FooterCss";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>SUPPORT</Heading>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Safety information</FooterLink>
           
           
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#">Our COVID-19 Response</FooterLink>
            <FooterLink href="#">Supporting people with disabilities</FooterLink>
            <FooterLink href="#">Report a neighbourhood concern</FooterLink>
            
          </Column>
          <Column>
            <Heading>COMMUNITY</Heading>
            <FooterLink href="#">Airbnb.org: disaster relief housing</FooterLink>
            <FooterLink href="#">Support Afghan refugees</FooterLink>
            <FooterLink href="#">Combating discrimination</FooterLink>
           
          </Column>
          <Column>
            <Heading>Hosting</Heading>
            <FooterLink href="#">Try hosting</FooterLink>
            <FooterLink href="#">AirCover:protection for Hosts</FooterLink>
            <FooterLink href="#">Explore hosting Resources</FooterLink>
            <FooterLink href="#">Visit our community forum</FooterLink>
            <FooterLink href="#">How to host responsibily</FooterLink>
          </Column>
          <Column>
            <Heading>About</Heading>
            <FooterLink href="#">Newsroom</FooterLink>
            <FooterLink href="#">Learn about new features</FooterLink>
            <FooterLink href="#">Letter from our founders</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Airbnb Luxe</FooterLink>
          </Column>
        </Row>
        <hr style={{ width: "100%", margin: "auto", color: "gray" }} />

        <EndDiv>
          <p>© 2021 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
          <p>
            <p>
              <LanguageIcon />
              English (IN) ₹ INR
            </p>
            <p>
              <FacebookIcon /> <TwitterIcon /> <InstagramIcon />
            </p>
          </p>
        </EndDiv>
      </Container>
    </Box>
  );
};
export { Footer };
