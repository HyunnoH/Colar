import styled from "styled-components";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "normal" | "primary" | "ghost";
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  danger?: boolean;
}

export default function Button({
  children,
  type,
  danger,
  ...restProps
}: ButtonProps) {
  return <button {...restProps}>{children}</button>;
}
