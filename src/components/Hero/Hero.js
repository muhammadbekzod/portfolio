import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio <br/>
         
      </SectionTitle>
      <SectionText>
        I'm Muhammad Bekzod Abdulkhaev who is a Front end developer. Experienced working with JavaScript, React and Nextjs. 
      </SectionText>
      <Button onClick={()=> window.location = '#portfolio'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;