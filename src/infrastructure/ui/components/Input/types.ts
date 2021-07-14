import { ReactNode } from "react";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "children"
  > {
  label?: ReactNode;
}
