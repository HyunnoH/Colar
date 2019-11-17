import React from "react";
import { Button, ButtonGroup, Navbar } from "reactstrap";

const Topbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <ButtonGroup>
        <Button color="secondary">Pen</Button>
        <Button color="secondary">Liner</Button>
        <Button color="secondary">Eraser</Button>
        <Button color="secondary">Run</Button>
      </ButtonGroup>
    </Navbar>
  );
};

export default Topbar;
