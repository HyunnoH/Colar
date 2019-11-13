import React, { useState, useCallback } from "react";
import { remote } from "electron";
import { css } from "emotion";
import { Button, ButtonGroup, Navbar } from "reactstrap";
import SelectedImage from "./SelectedImage";

const Main = () => {
  const [state, setState] = useState(0);
  const [path, setPath] = useState("");

  const selectFile = useCallback(async () => {
    const { filePaths } = await remote.dialog.showOpenDialog();

    if (filePaths.length) {
      setState(1);
      setPath(filePaths[0]);
    }
  }, [setState, setPath]);

  return state ? (
    <SelectedImage path={path} />
  ) : (
    <>
      <Navbar color="dark" dark expand="md">
        <ButtonGroup>
          <Button color="secondary">Pen</Button>
          <Button color="secondary">Liner</Button>
          <Button color="secondary">Color</Button>
          <Button color="secondary">Eraser</Button>
          <Button color="secondary">Run</Button>
        </ButtonGroup>
      </Navbar>
      <div className={style}>
        <div className={innerDiv}>
          <Button color="primary" onClick={selectFile}>
            Select file
          </Button>
        </div>
      </div>
    </>
  );
};

const style = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const innerDiv = css`
  justify-content: center;
  display: flex;
`;

export default Main;
