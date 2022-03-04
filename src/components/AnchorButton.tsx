import Link from 'next/link';

type ButtonAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const ButtonAnchor: React.FC<ButtonAnchorProps> = ({ children, href, variant, ...rest }) => {
  return (
    <Link href={href} passHref>
      <a className="button" data-variant={variant || 'primary'} {...rest}>
        {children}
      </a>
    </Link>
  );
};
