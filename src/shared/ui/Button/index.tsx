import { FC } from "react";
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
    variant = "filled",
    size = "md",
    text = "Text for button",
    disabled = false,
    fullWidth = false,
    startIcon,
    endIcon,
    onClick,
    className = "",
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "text":
                return "text-purple-700 hover:bg-purple-100 active:bg-purple-200";
            case "outlined":
                return "border border-purple-300 text-purple-700 hover:border-purple-500";
            default:
                return "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700";
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case "sm":
                return "py-1 px-3 text-sm";
            case "lg":
                return "py-3 px-6 text-lg";
            default:
                return "py-2 px-4";
        }
    };

    const buttonClasses = `
        rounded-md 
        transition-all 
        duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-300 
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${fullWidth ? "w-full" : ""} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        ${className}
    `;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
};

export default Button;