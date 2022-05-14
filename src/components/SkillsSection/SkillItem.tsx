import Image, { ImageLoaderProps } from 'next/image';
import { motion } from 'framer-motion';

function loader({ src }: ImageLoaderProps) {
  return `https://xesque.rocketseat.dev/platform/tech/${src}.svg`;
}

type SkillItemProps = { src: string; alt: string; position: number; isInView: boolean };

export const SkillItem = ({ src, alt, position, isInView }: SkillItemProps) => {
  return (
    <motion.li
      className="relative w-32 h-32 overflow-hidden rounded-xl"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: isInView ? 0 : -200, opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.2 + position * 0.05 }}
    >
      <Image className="z-0" src={src} layout="fill" alt={alt} loader={loader} />
      <div className="absolute inset-0 z-10 flex items-center justify-center transition opacity-0 bg-white/70 dark:bg-gray-900/90 backdrop-blur hover:opacity-100">
        <span className="text-lg italic font-light text-gray-900 dark:text-white">{alt}</span>
      </div>
    </motion.li>
  );
};
