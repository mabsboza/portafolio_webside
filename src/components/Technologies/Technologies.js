import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio, DiZend, DiGoogleCloudPlatform } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I 've worked  with a range of technologies in the web development world
      from back-end to front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React,
            Angular,
            Bootstrap
          </ListParagraph>
          <ListParagraph>
            Javascript,
            Typescript,
            Css,
            Ruby on rails,
            NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Ruby,
            Node,
            Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Postgres,
            mysql,
            Sql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Testing Tools</ListTitle>
          <ListParagraph>
            Rspec
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>
          <ListTitle>API</ListTitle>
          <ListParagraph>
            Rest,
            Graphql
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
