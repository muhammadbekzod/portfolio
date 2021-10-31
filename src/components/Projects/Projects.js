import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const ProjectsDemo=
//   [{
//     title: 'Project1',
//     description: 'this is about project desc'
//   },
//   {
//     title: 'Project2',
//     description: 'this is about project desc'
//   },
//   {
//     title: 'Project3',
//     description: 'this is about project desc'
//   },
//   {
//     title: 'Project4',
//     description: 'this is about project desc'
//   }];

const Projects = () => (
  <Section nopadding="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
       <BlogCard key={id}>
         <Img src={image} />
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr/>
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Stact</TitleContent>
           <TagList>
             {tags.map((tag, i) =>(
               <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
           <ExternalLinks href={'#web'}>Code</ExternalLinks>
           <ExternalLinks href={'#web'}>Source</ExternalLinks>
         </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;