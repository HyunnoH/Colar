import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import Button, { ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const children = text("children", "Click this");
  const danger = boolean("danger", false);
  const type = select<ButtonType>(
    "type",
    {
      Normal: "normal",
      Primary: "primary",
      Ghost: "ghost",
      None: undefined,
    },
    "normal"
  );

  return (
    <Button type={type} danger={danger}>
      {children}
    </Button>
  );
};
