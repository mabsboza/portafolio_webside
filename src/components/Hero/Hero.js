import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my portafolio
      </SectionTitle>
      <SectionText>
        Software engineer, entrepreneur, housband and father of a wonderfull child
      </SectionText>
      <Button href="#about">Read More</Button>
    </LeftSection>
  </Section>
);

export default Hero;