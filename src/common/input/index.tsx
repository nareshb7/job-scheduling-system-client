import React from "react";

export type InputType =
  | "text"
  | "checkbox"
  | "password"
  | "tel"
  | "email"
  | "date";

export interface InputProps {
  label?: string;
  type?: InputType;
  className?: string;
  placeHolder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeHolder = "",
  value,
  onChange = () => "",
  required = false,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${className}`}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
    />
  );
};

const InputWithLabel: React.FC<InputProps> = ({
  label,
  type = "text",
  className = "",
  placeHolder = "",
  value,
  onChange = () => "",
  required = false,
  name = "",
}) => {
  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Input
        type={type}
        placeHolder={placeHolder}
        className={`w-full ${className}`}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default InputWithLabel;
