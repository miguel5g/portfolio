import Image, { ImageLoaderProps } from 'next/image';

function loader({ src }: ImageLoaderProps) {
  return `https://xesque.rocketseat.dev/platform/tech/${src}.svg`;
}

const SkillItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <li className="relative w-32 h-32 overflow-hidden rounded-xl">
      <Image className="z-0" src={src} layout="fill" alt={alt} loader={loader} />
      <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 hover:bg-white/70 hover:backdrop-blur hover:opacity-100">
        <span className="text-lg italic font-light text-gray-900">{alt}</span>
      </div>
    </li>
  );
};

export const SkillsSection = () => {
  return (
    <section className="px-6 py-8 lg:py-16">
      {/* Content wrapper */}
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-center">Habilidades e Ferramentas</h2>
        <p className="mt-2 text-base font-light text-center text-gray-700">
          Algumas tecnologias e ferramentas que eu estou estudando.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 mx-auto mt-16">
          <SkillItem src="javascript" alt="JavaScript" />
          <SkillItem src="typescript" alt="TypeScript" />
          <SkillItem src="node" alt="NodeJS" />
          <SkillItem src="reactjs" alt="ReactJS" />
          <SkillItem src="nextjs" alt="NextJS" />
          <SkillItem src="git" alt="Git" />
          <SkillItem src="docker" alt="Docker" />
          <SkillItem src="firebase" alt="Firebase" />
          <SkillItem src="tailwind" alt="TailwindCSS" />
        </ul>
      </div>
    </section>
  );
};
