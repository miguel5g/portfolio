import { Project } from '../typings';
import { ProjectCard } from './ProjectCard';

export type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="px-6 py-8 lg:py-16">
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-center">Projetos</h2>
        <p className="mt-2 text-base font-light text-center text-gray-700">
          Projetos que tenho o orgulho de compartilhar.
        </p>

        <ul className="flex flex-wrap justify-center gap-8 mt-16">
          {projects.map((project) => (
            <li className="w-full max-w-xs" key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
