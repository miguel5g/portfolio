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
  return (
    <header className="sticky top-0 z-10 flex justify-center w-full px-6 py-3 border-b border-gray-200 backdrop-blur bg-white/95">
      {/* Header Wrapper */}
      <div className="flex items-center w-full max-w-6xl">
        {/* Logo */}
        <div>
          <span className="text-4xl font-black">Brand</span>
        </div>

        {/* Navigation */}
        <nav className="ml-8">
          <ul className="flex items-center gap-2">
            <ListItem href="#">Início</ListItem>
            <ListItem href="#">Sobre</ListItem>
            <ListItem href="#">Habilidades</ListItem>
            <ListItem href="#">Projetos</ListItem>
            <ListItem href="#">Contato</ListItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};
