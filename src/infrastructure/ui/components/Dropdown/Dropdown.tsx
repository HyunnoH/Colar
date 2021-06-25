import { ReactElement, useEffect, useState } from "react";

type DropdownEvent = "click" | "hover" | "contextMenu";

type MenuFunction = () => ReactElement;

interface DropdownProps {
  children: ReactElement;
  menu: ReactElement | MenuFunction;
  trigger?: DropdownEvent | Array<DropdownEvent>;
}

function convertEventName(eventName: DropdownEvent): string {
  return `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
}

export default function Dropdown({ children, menu, trigger }: DropdownProps) {
  const [visible, setVisible] = useState(false);

  const triggers = trigger
    ? Array.isArray(trigger)
      ? Object.fromEntries(
          trigger.map((eventName) => [
            convertEventName(eventName),
            () => setVisible(true),
          ])
        )
      : {
          [convertEventName(trigger)]: () => setVisible(true),
        }
    : {};

  useEffect(() => {
    console.log(visible);
  }, [visible]);

  return <div {...triggers}>{children}</div>;
}
