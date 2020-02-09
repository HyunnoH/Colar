import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Navbar } from "reactstrap";
import { changePenType } from "../../store/CanvasStyle";

const Topbar = () => {
  const dispatch = useDispatch();
  const canvasInfo = useSelector(state => state.CanvasInfo);

  const handleTypeChange = type => {
    dispatch(changePenType(type));
  };

  const handleClear = () => {
    if (!canvasInfo.context) return;
    canvasInfo.context.clearRect(
      0,
      0,
      canvasInfo.div.scrollWidth,
      canvasInfo.div.scrollHeight
    );
  };

  const sendToServer = () => {
    if (!canvasInfo.context) return;
    console.log(canvasInfo.canvas.toDataURL());
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
        <Button color="secondary" onClick={() => handleClear()}>
          Clear
        </Button>
        <Button color="secondary" onClick={() => sendToServer()}>
          Run
        </Button>
      </ButtonGroup>
    </Navbar>
  );
};

export default Topbar;
