import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from '../../typings';
import { ProjectCard } from './ProjectCard';

export type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 750,
  });

  return (
    <section className="px-6 py-8 lg:py-16 scroll-mt-16" id="projects" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-medium text-center text-gray-900 dark:text-white"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        >
          Projetos
        </motion.h2>
        <motion.p
          className="mt-2 text-base font-light text-center text-gray-600 dark:text-gray-300"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          Projetos que tenho o orgulho de compartilhar.
        </motion.p>

        <ul className="flex flex-wrap justify-center gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.li
              className="w-full max-w-xs"
              key={project.id}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
