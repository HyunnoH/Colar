import { ReactNode } from "react";

interface SubMenuProps {
  children: ReactNode;
}

export default function SubMenu({ children }: SubMenuProps) {
  return <ul>{children}</ul>;
}
