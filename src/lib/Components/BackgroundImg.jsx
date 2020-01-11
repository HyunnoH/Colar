import React, { useEffect, useRef } from "react";
import { css } from "emotion";
import { useDispatch } from "react-redux";
import { changeWidth, changeHeight } from "../../store/ImageState";
import { setImg } from "../../store/CanvasInfo";

const BackgroundImg = ({ imgPath }) => {
  const dispatch = useDispatch();
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.src = imgPath;
    dispatch(setImg(imgRef.current));
  }, [imgPath]);

  return (
    <img
      src={imgPath}
      alt={imgPath}
      className={imgClass}
      ref={imgRef}
      onLoad={e => {
        dispatch(changeWidth(e.target.scrollWidth));
        dispatch(changeHeight(e.target.scrollHeight));
      }}
    />
  );
};

const imgClass = css`
  position: absolute;
  z-index: 2;
`;

export default BackgroundImg;
