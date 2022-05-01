type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const SocialLink: React.FC<SocialLinkProps> = ({ children, ...rest }) => {
  return (
    <a className="p-2 transition-colors rounded-md hover:bg-gray-100" {...rest}>
      <span className="text-xl text-gray-700 hover:text-gray-900">{children}</span>
    </a>
  );
};
