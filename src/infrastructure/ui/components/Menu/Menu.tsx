import { ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}
