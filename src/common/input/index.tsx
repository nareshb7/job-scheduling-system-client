import React from "react";
import { InputProps, SelectProps, TextareaProps } from "./types";

export const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeHolder = "",
  value,
  onChange = () => "",
  required = false,
  name,
  ...rest
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
      {...rest}
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

export const Textarea = ({
  name,
  placeHolder,
  value,
  label,
  className,
  onChange,
}: TextareaProps) => {
  const textArea = () => (
    <textarea
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      className={`p-2 border border-gray-300 rounded mb-4 ${className}`}
    />
  );
  return label ? (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      {textArea()}
    </div>
  ) : (
    textArea()
  );
};

export const Select = ({
  name,
  value,
  onChange,
  options,
  label,
}: SelectProps) => {
  const selectComp = () => {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  };
  return label ? (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      {selectComp()}
    </div>
  ) : (
    selectComp()
  );
};

export default InputWithLabel;
