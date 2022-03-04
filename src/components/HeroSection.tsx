import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAtSign, FiBox } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

import { ButtonAnchor } from './AnchorButton';

export const HeroSection = () => {
  const [ref, inView] = useInView({
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <section className="px-6 py-8 pt-16 lg:py-16" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col items-center w-full max-w-5xl gap-8 mx-auto lg:gap-16 lg:flex-row">
        {/* Texts */}
        <motion.div
          className="flex flex-col flex-1 max-w-lg lg:max-w-none"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 lg:text-left lg:text-6xl">
            Desenvolvedor Front-End Júnior focado em <span className="text-teal-400">ReactJS</span>
          </h1>
          <p className="mt-2 text-base font-light text-center text-gray-600 lg:text-left">
            Estudando todo ecossistema de tecnologias JavaScript, React, Next.js.
          </p>

          {/* Links */}
          <div className="flex flex-col items-center gap-2 mx-auto mt-8 lg:mx-0 md:flex-row">
            <ButtonAnchor href="#contact">
              <FiAtSign className="text-lg" />
              <span>Entre em Contato</span>
            </ButtonAnchor>
            <ButtonAnchor href="#projects" variant="secondary">
              <FiBox className="text-lg" />
              <span>Meus Projetos</span>
            </ButtonAnchor>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-none w-full h-64 max-w-sm"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image src="/svg/programming.svg" alt="" layout="fill" />
        </motion.div>
      </div>
    </section>
  );
};
