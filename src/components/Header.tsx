import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useWindowSize } from 'react-use';

import { BaseAnchor } from './BaseAnchor';

const ListItem: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...rest
}) => {
  return (
    <li className="text-base font-light text-gray-600 transition-colors hover:text-gray-900">
      <BaseAnchor className="px-4 py-2 transition-colors rounded hover:bg-gray-100" {...rest}>
        {children}
      </BaseAnchor>
    </li>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  function handleToggleMenu() {
    setIsOpen((state) => !state);
  }

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full px-6 py-3 border-b border-gray-200 backdrop-blur bg-white/80">
      {/* Header Wrapper */}
      <div className="flex flex-col items-center w-full max-w-md lg:max-w-6xl lg:flex-row">
        {/* Mobile View */}
        <div className="flex justify-between w-full lg:w-max">
          {/* Logo */}
          <div>
            <span className="text-4xl font-black">Brand</span>
          </div>

          <button className="p-2 lg:hidden" onClick={handleToggleMenu} aria-label="Abrir menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu */}
        <motion.div
          className="flex flex-col w-full gap-4 overflow-hidden"
          initial={{
            height: 0,
          }}
          animate={{
            height: isOpen || width >= 1024 ? 'auto' : 0,
          }}
        >
          {/* Navigation */}
          <div className="lg:hidden" />

          <nav className="lg:ml-8">
            <ul className="flex flex-col items-center gap-2 lg:flex-row">
              <ListItem href="#">Início</ListItem>
              <ListItem href="#">Sobre</ListItem>
              <ListItem href="#">Habilidades</ListItem>
              <ListItem href="#">Projetos</ListItem>
              <ListItem href="#">Contato</ListItem>
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};
