type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const SocialLink: React.FC<SocialLinkProps> = ({ children, ...rest }) => {
  return (
    <a
      className="p-2 transition-colors rounded-md dark:hover:bg-gray-800 hover:bg-gray-200"
      {...rest}
    >
      <span className="text-xl text-gray-600 dark:text-gray-300">{children}</span>
    </a>
  );
};
