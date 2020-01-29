import React from "react";
import { Button, ButtonGroup, Navbar } from "reactstrap";

const Zoomer = ({ zoomBtnHandler, uzoomBtnHandler }) => {
  return (
    <Navbar>
      <ButtonGroup>
        <Button onClick={zoomBtnHandler}>Zoom</Button>
        <Button onClick={uzoomBtnHandler}>Unzoom</Button>
      </ButtonGroup>
    </Navbar>
  );
};

export default Zoomer;
