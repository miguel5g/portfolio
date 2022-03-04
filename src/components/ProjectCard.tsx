import Image from 'next/image';

import { ProjectLink } from './ProjectLink';
import { Project } from '../typings';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-full h-full max-w-xs">
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" />
      </div>

      <h3 className="mt-4 text-lg font-normal text-gray-900">{project.title}</h3>
      <p className="mb-4 text-base font-light text-gray-700">{project.description}</p>

      <div className="flex gap-2 mt-auto">
        {project.urls.map((url, index) => (
          <ProjectLink key={url.url} label={url.label} url={url.url} position={index} />
        ))}
      </div>
    </div>
  );
};
