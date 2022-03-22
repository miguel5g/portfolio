import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

type TextAreaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string | JSX.Element;
  name: string;
  description?: string;
  type?: undefined;
};

export const TextAreaInput = ({ name, label, description, ...rest }: TextAreaInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>();
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <label className="flex flex-col gap-1">
      <span className="flex items-center gap-1 text-sm font-light">{label}</span>
      <textarea
        name={name}
        ref={inputRef}
        className="px-2 min-h-32 max-h-32 pt-2 pb-1.5 rounded-lg font-light bg-gray-50 focus:bg-transparent border border-gray-200 outline-none transition-colors focus:border-cyan-900"
        {...rest}
      />
      {description && <p className="text-xs font-light text-gray-700">{description}</p>}
    </label>
  );
};
