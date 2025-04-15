export interface TextareaProps {
  name: string;
  placeHolder: string;
  value: string;
  label?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface DropDownOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: DropDownOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
  label?: string;
}

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
