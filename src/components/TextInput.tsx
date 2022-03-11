type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
  type?: undefined;
};

export const TextInput = ({ label, description, ...rest }: TextInputProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-light">{label}</span>
      <input
        className="px-2 pt-2 pb-1.5 rounded-lg font-light bg-transparent border border-gray-200 outline-none transition-colors focus:border-cyan-900"
        type="text"
        {...rest}
      />
      {description && <p className="text-xs font-light text-gray-700">{description}</p>}
    </label>
  );
};