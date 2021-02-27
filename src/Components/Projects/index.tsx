import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
  Container, Project, ProjectList, Title, ProjectTitle, ProjectLink,
} from './styles';

const Projects: React.FC = () => (
  <Container>
    <Title>Projetos</Title>

    <ProjectList>
      <Project>
        <img src="/projects/moevit.png" alt="Project thumb" />
        <ProjectTitle>moevit - nlw#4</ProjectTitle>
        <ProjectLink href="https://github.com/miguel5g/nlw-4-react" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
        </ProjectLink>
      </Project>

      <Project>
        <img src="/projects/portfolio.png" alt="Project thumb" />
        <ProjectTitle>Meu site pessoal</ProjectTitle>
        <ProjectLink href="https://github.com/miguel5g/portfolio" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
        </ProjectLink>
      </Project>

      <Project>
        <img src="/projects/feach.png" alt="Project thumb" />
        <ProjectTitle>Feach Community</ProjectTitle>
        <ProjectLink href="https://github.com/miguel5g/feach-web" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          Github
        </ProjectLink>
      </Project>
    </ProjectList>
  </Container>
);

export default Projects;
