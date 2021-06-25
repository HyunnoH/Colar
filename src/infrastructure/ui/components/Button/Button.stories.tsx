import { text, withKnobs } from "@storybook/addon-knobs";
import { themeDecorator } from "../../styles/withTheme";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs, themeDecorator],
};

export const Default = () => {
  const children = text("children", "Click this");

  return <Button>{children}</Button>;
};
