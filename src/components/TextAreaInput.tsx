type TextAreaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  description?: string;
  type?: undefined;
};

export const TextAreaInput = ({ label, description, ...rest }: TextAreaInputProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-light">{label}</span>
      <textarea
        className="px-2 min-h-32 max-h-32 pt-2 pb-1.5 rounded-lg font-light bg-transparent border border-gray-200 outline-none transition-colors focus:border-cyan-900"
        {...rest}
      />
      {description && <p className="text-xs font-light text-gray-700">{description}</p>}
    </label>
  );
};
