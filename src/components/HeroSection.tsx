import Image from 'next/image';
import { FiAtSign, FiBox } from 'react-icons/fi';

import { Button } from './Button';

export const HeroSection = () => {
  return (
    <section className="px-6 py-8 pt-16 lg:py-16">
      {/* Content wrapper */}
      <div className="flex flex-col items-center w-full max-w-5xl gap-16 mx-auto lg:flex-row">
        {/* Texts */}
        <div className="flex flex-col flex-1 max-w-lg lg:max-w-none">
          <h1 className="text-4xl font-bold text-center text-gray-900 lg:text-left lg:text-6xl">
            Desenvolvedor Front-End Júnior focado em <span className="text-teal-500">ReactJS</span>
          </h1>
          <p className="mt-2 text-base font-light text-center text-gray-600 lg:text-left">
            Estudando todo ecossistema de tecnologias JavaScript, React, Next.js.
          </p>

          {/* Links */}
          <div className="flex flex-col items-center gap-2 mx-auto mt-8 lg:mx-0 md:flex-row">
            <Button>
              <FiAtSign className="text-lg" />
              <span>Entre em Contato</span>
            </Button>
            <Button variant="secondary">
              <FiBox className="text-lg" />
              <span>Meus Projetos</span>
            </Button>
          </div>
        </div>

        <div className="relative flex-none w-full h-64 max-w-sm">
          <Image src="/svg/programming.svg" alt="" layout="fill" />
        </div>
      </div>
    </section>
  );
};
