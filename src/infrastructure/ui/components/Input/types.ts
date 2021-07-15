import { ReactNode } from "react";

export interface BaseInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "children"
  > {
  label?: ReactNode;
}

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
type ReservedInputType = "range";

export interface InputProps extends BaseInputProps {
  type?: Exclude<InputType, ReservedInputType>;
}
