import React from "react";
import { Button, Navbar } from "reactstrap";
import { css } from "emotion";

const MenuBar = () => {
  return (
    <Navbar className={style}>
      <Button color="outline-dark">Pen</Button>
      <Button color="outline-dark">Liner</Button>
      <Button color="outline-dark">Color</Button>
      <Button color="outline-dark">Eraser</Button>
      <Button color="outline-dark">Run</Button>
    </Navbar>
  );
};

const style = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-content: center;
  justify-content: center;
`;
export default MenuBar;
