import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
}

export default function MenuItem({ children }: MenuItemProps) {
  return <li>{children}</li>;
}
