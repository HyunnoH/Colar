import React, { useState, useCallback } from "react";
import { remote } from "electron";
import { css } from "emotion";
import { Button } from "reactstrap";
import SelectedImage from "./SelectedImage";
import Topbar from "./Topbar";
import { SketchPicker } from "react-color";
import Canvas from "./Canvas";

const Main = () => {
  const [state, setState] = useState(0);
  const [path, setPath] = useState("");

  const selectFile = useCallback(async () => {
    const { filePaths } = await remote.dialog.showOpenDialog();

    if (filePaths.length) {
      setPath(filePaths[0]);
      setState(1);
    }
  }, [setState, setPath]);

  return (
    <>
      <Topbar />
      <div className={bodyDiv}>
        {state ? (
          <div className={main}>
            <Canvas imagePath={path} />
          </div>
        ) : (
          <article className={style}>
            <div className={innerDiv}>
              <Button color="primary" onClick={selectFile}>
                Select file
              </Button>
            </div>
          </article>
        )}
        <aside className={pickerStyle}>
          <SketchPicker />
        </aside>
      </div>
    </>
  );
};
const bodyDiv = css`
  display: flex;
  flex-direction: row;
  height: 90%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const main = css`
  width: 100%;
`;

const style = css`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  float: left;
`;

const innerDiv = css`
  justify-content: center;
  display: flex;
`;

const pickerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: darkgray;
  border: 2px solid darkgray;
`;
export default Main;
