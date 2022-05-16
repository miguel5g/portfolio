import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useWindowSize } from 'react-use';

import { NavItem } from './NavItem';
import { MobileContainer } from './MobileContainer';

const ToggleThemeButton = dynamic(() => import('./ToggleThemeButton'), { ssr: false });

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width } = useWindowSize();

  function handleToggleMenu() {
    setIsMenuOpen((state) => !state);
  }

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full px-6 py-3 border-b border-gray-200 dark:border-gray-800 backdrop-blur bg-white/80 dark:bg-gray-800/80">
      {/* Header Wrapper */}
      <div className="flex flex-col items-center w-full max-w-md lg:max-w-6xl lg:flex-row">
        <MobileContainer isMenuOpen={isMenuOpen} onMenuToggle={handleToggleMenu} />

        {/* Menu */}
        <motion.div
          className="flex flex-col w-full gap-4 overflow-hidden lg:flex-row lg:items-center"
          initial={{
            height: 0,
          }}
          animate={{
            height: isMenuOpen || width >= 1024 ? 'auto' : 0,
          }}
        >
          {/* Navigation */}
          <div className="lg:hidden" />

          <nav className="lg:ml-8">
            <ul className="flex flex-col items-center gap-2 lg:flex-row">
              <NavItem href="#">Início</NavItem>
              <NavItem href="#about">Sobre</NavItem>
              <NavItem href="#skills">Habilidades</NavItem>
              <NavItem href="#projects">Projetos</NavItem>
              <NavItem href="#contact">Contato</NavItem>
            </ul>
          </nav>

          <ToggleThemeButton />
        </motion.div>
      </div>
    </header>
  );
};
