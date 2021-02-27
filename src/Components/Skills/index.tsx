import React from 'react';

import {
  Container, Skill, SkillContainer, Title,
} from './styles';

const Skills: React.FC = () => (
  <Container>
    <Title>Habilidades</Title>

    <SkillContainer>
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/typescript.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/javascript.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/node.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/nextjs.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/git.svg" />
      <Skill tech="https://xesque.rocketseat.dev/platform/tech/mongodb.svg" />
    </SkillContainer>
  </Container>
);

export default Skills;
