import { motion } from 'framer-motion';
import Image, { ImageLoaderProps } from 'next/image';
import { useInView } from 'react-intersection-observer';

function loader({ src }: ImageLoaderProps) {
  return `https://xesque.rocketseat.dev/platform/tech/${src}.svg`;
}

type SkillItemProps = { src: string; alt: string; position: number; isInView: boolean };

const SkillItem = ({ src, alt, position, isInView }: SkillItemProps) => {
  return (
    <motion.li
      className="relative w-32 h-32 overflow-hidden rounded-xl"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: isInView ? 0 : -200, opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.2 + position * 0.05 }}
    >
      <Image className="z-0" src={src} layout="fill" alt={alt} loader={loader} />
      <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 hover:bg-white/70 hover:backdrop-blur hover:opacity-100">
        <span className="text-lg italic font-light text-gray-900">{alt}</span>
      </div>
    </motion.li>
  );
};

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 750,
  });

  return (
    <section className="px-6 py-8 lg:py-16" id="skills" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-medium text-center"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        >
          Habilidades e Ferramentas
        </motion.h2>
        <motion.p
          className="mt-2 text-base font-light text-center text-gray-700"
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
