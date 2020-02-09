import React, { useState, useCallback } from "react";
import { remote } from "electron";
import { css } from "emotion";
import { Button } from "reactstrap";
// import SelectedImage from "./SelectedImage";
import Topbar from "./Topbar";
import Canvas from "./Canvas";
import Sidebar from "./Sidebar";

const Main = () => {
  const [state, setState] = useState(0);
  const [path, setPath] = useState("");

  const selectFile = useCallback(async () => {
    const { filePaths } = await remote.dialog.showOpenDialog(dialogOption);

    if (filePaths.length) {
      setPath(`file://${filePaths[0]}`);
      setState(1);
    }
  }, [setState, setPath]);

  return (
    <>
      <Topbar />
      <div className={bodyDiv}>
        {state ? (
          <Canvas imagePath={path} />
        ) : (
          <article className={articleStyle}>
            <div className={innerDiv}>
              <h1 className={Title}>Colar</h1>
              <span className={subtitle}>
                User-friendly image auto-painting app
              </span>
              <br />
              <Button color="primary" onClick={selectFile}>
                Select file
              </Button>
            </div>
          </article>
        )}
        <Sidebar />
      </div>
    </>
  );
};

const dialogOption = {
  properties: ["openFile"],
  filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png"] }]
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

const articleStyle = css`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  float: left;
  align-items: center;
`;

const innerDiv = css`
  width: 30vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = css`
  font-size: 5rem;
`;

const subtitle = css`
  font-size: 1.5rem;
`;
export default Main;
