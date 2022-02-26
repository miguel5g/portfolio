import Image from 'next/image';
import { FiAtSign, FiBox } from 'react-icons/fi';

import { Button } from './Button';

export const HeroSection = () => {
  return (
    <section className="py-16">
      {/* Content wrapper */}
      <div className="flex items-center w-full max-w-5xl gap-16 mx-auto">
        {/* Texts */}
        <div className="flex flex-col flex-1">
          <h1 className="text-6xl font-bold text-gray-900">
            Desenvolvedor Front-End Júnior focado em <span className="text-teal-500">ReactJS</span>
          </h1>
          <p className="mt-2 text-base font-light text-gray-600">
            Estudando todo ecossistema de tecnologias JavaScript, React, Next.js.
          </p>

          {/* Links */}
          <div className="flex gap-2 mt-8">
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

        <div className="relative flex-1 h-64">
          <Image src="/svg/programming.svg" alt="" layout="fill" />
        </div>
      </div>
    </section>
  );
};
