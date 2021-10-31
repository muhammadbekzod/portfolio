import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range a technologies in the web development world.
    From Front-end to Design.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <LinkContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </LinkContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <LinkContainer>
        <ListTitle>Data</ListTitle>
        <ListParagraph>
          Experience with <br />
        Databases and Data structure
        </ListParagraph>
      </LinkContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem" />
      <LinkContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
         tools like Figma
        </ListParagraph>
      </LinkContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
