type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const Button: React.FC<ButtonProps> = ({ children, variant, type, ...rest }) => {
  return (
    <button
      className="button"
      type={type || 'button'}
      data-variant={variant || 'primary'}
      {...rest}
    >
      {children}
    </button>
  );
};
