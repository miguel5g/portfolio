import { motion } from 'framer-motion';
import { FiInfo } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

export const AboutSection = () => {
  const [ref, inView] = useInView({
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <section className="px-6 py-8 lg:py-16" id="about" ref={ref}>
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
            Olá 🖖! Me chamo <strong>Miguel Ângelo</strong>.
            <br />
            <br />
            Sou um jovem que descobriu uma paixão por tecnologia e por programação há alguns anos.
            Tudo começou quando descobri o multiplayer do Minecraft, tentando criar servidores e
            plugins para eles, esse foi meu primeiro contato com a programação, porém acabei
            desistindo pois Java não é uma linguagem muito amigável para primeiro contato sem um
            roadmap de aprendizado. Algum tempo depois eu iniciei um curso de Manutenção de
            Computadores, e então aprendi mais como funciona os hardwares e de quebra o software
            também.
            <br />
            <br />
            Alguns anos se passaram e então eu descobri o Python, e nesse momento minha mente{' '}
            <strong>explodiu</strong>
            🤯, ali descobri todas as possibilidades que a programação me dava, e enquanto estudava,
            acabei esbarrando com um anúncio da Semana OmniStack 8.0, e me inscrevi claro, pois
            estava no meu melhor momento de descobrimentos, e essa foi uma das melhores escolhas que
            eu poderia ter feito, aprendi sobre back-end, front-end e mobile em apenas uma semana,
            também aprendi sobre JavaScript e decidi que aquela iria ser minha linguagem principal,
            não pelo hype, mas pelo universo que ela engloba.
            <br />
            <br />
            Hoje meu foco de estudos é o <strong>front-end</strong>, pois é nela que eu quero me
            especializar, ter um contato mais próximo com o usuário final nos dar um sentimento que
            é difícil de explicar, só sei que gosto 😊.
          </p>

          <div className="flex flex-col p-4 mt-8 border-b border-gray-200 rounded-lg dark:border-gray-900 bg-gray-50 dark:bg-gray-800">
            <span className="flex items-center justify-center gap-2">
              <FiInfo />
              <strong className="text-gray-900 dark:text-white">Versão resumida</strong>
            </span>
            <span className="mt-2">
              Sou uma pessoa autodidata que sempre dá o melhor de si para cumprir suas tarefas
              independente de gostar ou não, tento sempre ser sincero sobre tudo, busco ajuda e
              sempre admito meus erros, também sou uma pessoa que gosta de ouvir antes de falar e
              entender sobre o que estou falando, tenho um pouco de dificuldade de me relacionar com
              as pessoas (timidez), mas estou trabalhando nisso.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
