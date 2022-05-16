import { BaseAnchor } from '../BaseAnchor';

export const NavItem: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...rest
}) => {
  return (
    <li className="flex text-base font-light text-gray-600 dark:text-gray-300 hover:dark:text-white hover:text-gray-900">
      <BaseAnchor className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700" {...rest}>
        {children}
      </BaseAnchor>
    </li>
  );
};
