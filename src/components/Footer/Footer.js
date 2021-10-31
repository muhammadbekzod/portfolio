import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href="01080775120">01080775120</LinkItem>
       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="mailto:abdulkhaev96@gmail.com">Abdulkhaev96@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>You can contact with me if u need Front End Developer</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/muhammadbekzod">
       <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/muhammad-abdulkhaev-89a7b621a/">
       <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.instagram.com/muhammadabdulkhaev1">
       <AiFillInstagram size="3rem" />
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
