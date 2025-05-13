import { forwardRef } from 'react';
import { IInputProps } from './types';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      label,
      error = false,
      errorMessage,
      startIcon,
      endIcon,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseColors = {
      normal: 'border-purple-300 text-purple-700',
      hover: {
        outlined: 'hover:border-purple-400 hover:text-purple-950',
        filled: 'hover:bg-purple-600 active:bg-purple-700',
        standard: 'hover:border-purple-400 hover:text-purple-950'
      },
      focus: 'focus:border-purple-500 focus:ring-purple-200',
      error: 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-200'
    };

    const getVariantClasses = () => {
      const base = `rounded-md outline-none transition-all duration-200 ${baseColors.normal} ${error ? baseColors.error : baseColors.focus}`;
      
      switch (variant) {
        case 'filled':
          return `${base} bg-purple-500 text-white ${baseColors.hover.filled}`;
        case 'standard':
          return `${base} border-b ${baseColors.hover.standard}`;
        default: // outlined
          return `${base} border ${baseColors.hover.outlined}`;
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return 'py-1.5 px-3 text-sm';
        case 'lg':
          return 'py-3 px-4 text-lg';
        default:
          return 'py-2 px-3 text-base';
      }
    };

    const inputClasses = `
      ${getVariantClasses()}
      ${getSizeClasses()}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `;

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label 
            className={`block text-sm font-medium ${
              error ? 'text-red-600' : 'text-purple-700'
            }`}
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {startIcon && (
            <span className={`absolute left-3 ${error ? 'text-red-500' : 'text-purple-400'}`}>
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            className={`${inputClasses} ${startIcon ? 'pl-10' : ''} ${
              endIcon ? 'pr-10' : ''
            }`}
            {...props}
          />
          {endIcon && (
            <span className={`absolute right-3 ${error ? 'text-red-500' : 'text-purple-400'}`}>
              {endIcon}
            </span>
          )}
        </div>

        {error && errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;