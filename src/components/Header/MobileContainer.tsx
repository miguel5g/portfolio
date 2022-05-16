import { FiMenu, FiX } from 'react-icons/fi';

type MobileContainerProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

export const MobileContainer = ({ isMenuOpen, onMenuToggle }: MobileContainerProps) => {
  return (
    <div className="flex justify-between w-full lg:w-max">
      {/* Logo */}
      <div>
        <span className="text-4xl font-black text-black dark:text-white">miguel5g</span>
      </div>

      <button className="p-2 lg:hidden" onClick={onMenuToggle} aria-label="Abrir menu">
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
};
