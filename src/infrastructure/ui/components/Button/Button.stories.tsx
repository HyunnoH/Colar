import { text, withKnobs } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const children = text("children", "Click this");

  return <Button>{children}</Button>;
};
