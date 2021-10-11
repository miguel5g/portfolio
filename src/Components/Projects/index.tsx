import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaEye } from 'react-icons/fa';

import {
  Container,
  Project,
  ProjectList,
  Title,
  ProjectTitle,
  ProjectLink,
} from './styles';

interface ProjectData {
  title: string;
  imageUrl: string;
  links: [string, string, IconType][];
}

const projectList: ProjectData[] = [
  {
    title: 'Letmeask',
    imageUrl: '/projects/letmeask.png',
    links: [
      ['Github', 'https://github.com/miguel5g/letmeask', FaGithub],
      ['Demo', 'https://letmeask-live.web.app/', FaEye],
    ],
  },
  {
    title: 'Meu site pessoal',
    imageUrl: '/projects/portfolio.png',
    links: [['Github', 'https://github.com/miguel5g/portfolio', FaGithub]],
  },
  {
    title: 'Taskfy',
    imageUrl: '/projects/taskfy.png',
    links: [
      ['Github', 'https://github.com/miguel5g/taskfy', FaGithub],
      ['Demo', 'http://taskfy.vercel.app/', FaEye],
    ],
  },
  {
    title: 'ToDo List',
    imageUrl: '/projects/todo-list.png',
    links: [
      ['Github', 'https://github.com/miguel5g/ow-todo-list', FaGithub],
      ['Demo', 'http://ow-todo.vercel.app/', FaEye],
    ],
  },
];

const Projects: React.FC = () => (
  <Container>
    <Title>Projetos</Title>

    <ProjectList>
      {projectList.map((project) => (
        <Project key={project.title}>
          <img src={project.imageUrl} alt="Project thumb" />
          <ProjectTitle>{project.title}</ProjectTitle>
          <div>
            {project.links.map((link, index) => {
              const Icon = link[2];

              return (
                <ProjectLink
                  key={index}
                  href={link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                  {link[0]}
                </ProjectLink>
              );
            })}
          </div>
        </Project>
      ))}
    </ProjectList>
  </Container>
);

export default Projects;
