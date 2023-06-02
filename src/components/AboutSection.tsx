import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export const AboutSection = () => {
  const [ref, inView] = useInView({
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <section className="px-6 py-8 lg:py-16 scroll-mt-16" id="about" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-medium text-center text-gray-900 dark:text-white"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          Sobre mim
        </motion.h2>

        <motion.div
          className="mt-8 text-lg font-light text-gray-600 dark:text-gray-300"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Olá 🖖! Sou Miguel Ângelo, um entusiasta da tecnologia e da programação. Há alguns anos,
            descobri minha paixão por esses temas. Tudo começou quando me deparei com o multiplayer
            do Minecraft e me interessei em criar servidores e plugins para ele. No entanto, acabei
            desistindo dessa empreitada, já que Java não é uma linguagem muito amigável para
            iniciantes sem um guia de aprendizado adequado.
          </p>
          <p>
            Tempos depois, decidi fazer um curso de Manutenção de Computadores, o que me
            proporcionou um entendimento mais aprofundado sobre hardware e também sobre software.
          </p>
          <p>
            Com o passar dos anos, conheci o Python e minha mente foi aberta para um universo de
            possibilidades 🤯. Enquanto estudava, me deparei com um anúncio da Semana OmniStack 8.0
            e decidi me inscrever. Essa foi uma das melhores escolhas que já fiz, pois em apenas uma
            semana aprendi sobre back-end, front-end e desenvolvimento mobile. Também tive meu
            primeiro contato com JavaScript e decidi que seria minha linguagem principal, não por
            causa do hype, mas por causa do vasto universo que ela engloba.
          </p>
          <p>
            Hoje em dia, meu objetivo principal é me tornar um especialista em desenvolvimento web.
            Estou empregado na área como desenvolvedor full stack e estou empenhado em aprimorar
            minhas habilidades nesse campo em constante evolução. Trabalhar tanto no front-end
            quanto no back-end me permite ter uma visão completa do processo de desenvolvimento e
            oferecer soluções abrangentes aos usuários finais. Estou entusiasmado com as
            oportunidades que surgem nessa área e determinado a me tornar um profissional de
            destaque nesse ramo.
          </p>

          <div className="flex flex-col p-4 mt-8 border-b border-gray-200 rounded-lg dark:border-gray-900 bg-gray-50 dark:bg-gray-800">
            <span className="flex items-center justify-center gap-2">
              <FiInfo />
              <strong className="text-gray-900 dark:text-white">Versão resumida</strong>
            </span>
            <span className="mt-2">
              Eu sou Miguel Ângelo, um entusiasta da tecnologia e da programação. Após descobrir
              minha paixão pela programação através do Minecraft, explorei diferentes áreas, como
              manutenção de computadores, até me apaixonar pelo JavaScript. Atualmente, sou um
              desenvolvedor full stack com foco em desenvolvimento web. Trabalhar tanto no front-end
              quanto no back-end me permite oferecer soluções abrangentes aos usuários finais. Estou
              determinado a me destacar nessa área em constante evolução.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
