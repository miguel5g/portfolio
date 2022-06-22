import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { SkillItem } from './SkillItem';

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 750,
  });

  return (
    <section className="px-6 py-8 lg:py-16 scroll-mt-16" id="skills" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-medium text-center text-gray-900 dark:text-white"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        >
          Habilidades e Ferramentas
        </motion.h2>
        <motion.p
          className="mt-2 text-base font-light text-center text-gray-600 dark:text-gray-300"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          Algumas tecnologias e ferramentas que eu estou estudando.
        </motion.p>

        <ul className="flex flex-wrap justify-center gap-4 mx-auto mt-16">
          <SkillItem isInView={inView} position={0} src="javascript" alt="JavaScript" />
          <SkillItem isInView={inView} position={1} src="typescript" alt="TypeScript" />
          <SkillItem isInView={inView} position={2} src="node" alt="NodeJS" />
          <SkillItem isInView={inView} position={3} src="reactjs" alt="ReactJS" />
          <SkillItem isInView={inView} position={4} src="nextjs" alt="NextJS" />
          <SkillItem isInView={inView} position={5} src="git" alt="Git" />
          <SkillItem isInView={inView} position={6} src="docker" alt="Docker" />
          <SkillItem isInView={inView} position={7} src="firebase" alt="Firebase" />
          <SkillItem isInView={inView} position={8} src="tailwind" alt="TailwindCSS" />
        </ul>
      </div>
    </section>
  );
};
