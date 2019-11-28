import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup, Navbar } from "reactstrap";
import { changePenType } from "../../store/PenType";

const Topbar = () => {
  const dispatch = useDispatch();

  const handleTypeChange = type => {
    dispatch(changePenType(type));
  };

  return (
    <Navbar color="dark" dark expand="md">
      <ButtonGroup>
        <Button color="secondary" onClick={() => handleTypeChange("brush")}>
          Pen
        </Button>
        <Button color="secondary" onClick={() => handleTypeChange("line")}>
          Liner
        </Button>
        <Button color="secondary" onClick={() => handleTypeChange("eraser")}>
          Eraser
        </Button>
        <Button color="secondary">Run</Button>
      </ButtonGroup>
    </Navbar>
  );
};

export default Topbar;
