import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';

import {
  Container,
  Project,
  ProjectList,
  Title,
  ProjectTitle,
  ProjectLink,
  ProjectDescription,
} from './styles';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
  urls: [{ label: string; url: string }];
}

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Container>
    <Title>Projetos</Title>

    <ProjectList>
      {projects.map((project) => (
        <Project key={project.id}>
          <img src={project.imageUrl} alt="Project thumb" />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <div>
            {project.urls.map((url) => (
              <ProjectLink key={url.url} href={url.url} target="_blank">
                {url.label === 'github' ? (<FaGithub />) : (<FaEye />)}
                {url.label}
              </ProjectLink>
            ))}
          </div>
        </Project>
      ))}

      {/*
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
       */}
    </ProjectList>
  </Container>
);

export default Projects;
