import { ReactNode } from "react";

type ButtonVariant = "outlined" | "text" | "filled"; 
type ButtonSize = "sm" | "md" | "lg"; 

export interface IButtonProps {
  variant?: ButtonVariant; 
  size?: ButtonSize;
  text?: string; 
  disabled?: boolean; 
  fullWidth?: boolean; 
  startIcon?: ReactNode; 
  endIcon?: ReactNode; 
  onClick?: () => void; 
  className?: string; 
}
