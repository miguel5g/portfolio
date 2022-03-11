import Link from 'next/link';

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href: string;
};

export const AnchorButton: React.FC<AnchorButtonProps> = ({ children, href, variant, ...rest }) => {
  return (
    <Link href={href} passHref>
      <a className="button" data-variant={variant || 'primary'} {...rest}>
        {children}
      </a>
    </Link>
  );
};
