type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <button className="button" {...rest} data-variant={variant || 'primary'}>
      {children}
    </button>
  );
};
