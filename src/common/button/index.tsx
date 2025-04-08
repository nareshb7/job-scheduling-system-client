import React from "react";

export type ButtonType = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  className: string;
  type?: ButtonType;
  onClick?: () => void;
  children?: React.JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type = "button",
  onClick = () => "",
  children,
}) => {
  return (
    <button
      type={type}
      className={`px-5 py-2 rounded-lg text-sm font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
