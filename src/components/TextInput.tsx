import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string | JSX.Element;
  name: string;
  description?: string;
  type?: 'text' | 'email' | 'number' | 'password';
};

export const TextInput = ({ name, label, description, ...rest }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const { fieldName, registerField, error, clearError } = useField(name);

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
      <span className="flex items-center gap-1 text-sm font-light text-gray-900 dark:text-white">
        {label}
      </span>
      <input
        name={name}
        ref={inputRef}
        type="text"
        className="px-2 pt-2 pb-1.5 rounded-lg font-light bg-gray-50 dark:bg-gray-900 dark:border-gray-700 focus:bg-transparent border border-gray-200 outline-none transition-colors focus:border-cyan-900 dark:focus:border-cyan-900 text-gray-900 dark:text-gray-200 dark:focus:bg-transparent"
        onFocus={clearError}
        {...rest}
      />
      {description && !error && <p className="text-xs font-light text-gray-600 dark:text-gray-300">{description}</p>}
      {error && <p className="text-xs font-light text-red-600">{error}</p>}
    </label>
  );
};
