import Link from 'next/link';

type BaseAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BaseAnchor: React.FC<BaseAnchorProps> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} passHref>
      <a {...rest}>{children}</a>
    </Link>
  );
};
