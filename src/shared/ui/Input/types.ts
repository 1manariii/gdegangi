import { InputHTMLAttributes } from "react";

type InputVariant = 'outlined' | 'filled' | 'standard';
type InputSize = 'sm' | 'md' | 'lg';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}