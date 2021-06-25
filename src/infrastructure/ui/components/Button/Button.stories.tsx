import { select, text, withKnobs } from "@storybook/addon-knobs";
import { themeDecorator } from "../../styles/withTheme";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withKnobs, themeDecorator],
};

export const Default = () => {
  const children = text("children", "Click this");
  const active = select(
    "active",
    {
      true: true,
      false: false,
      auto: undefined,
    },
    undefined
  );

  return (
    <Button active={typeof active === "boolean" ? active : undefined}>
      {children}
    </Button>
  );
};
