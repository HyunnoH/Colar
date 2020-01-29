import React from "react";
import Zoomer from "../Components/Zoomer";
import { useSelector } from "react-redux";

const ZoomerContainer = () => {
  const canvasInfo = useSelector(state => state.CanvasInfo);
  const bgImgState = useSelector(state => state.ImageState);

  const handleZoomClicked = () => {
    if (canvasInfo.context === null || bgImgState.context === null) return;
    canvasInfo.context.scale(2, 2);
    console.log(canvasInfo.context);
    // console.log(bgImgState.context);
  };
  const handleUnzoomClicked = () => {
    if (canvasInfo.context === null || bgImgState.context === null) return;
    canvasInfo.context.scale(0.5, 0.5);

    // bgImgState.context.scale(0.5, 0.5);
  };

  return (
    <Zoomer
      zoomBtnHandler={handleZoomClicked}
      uzoomBtnHandler={handleUnzoomClicked}
    />
  );
};

export default ZoomerContainer;
