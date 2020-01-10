import React, { useEffect, useState, useRef } from "react";
import { css } from "emotion";
import { useDispatch } from "react-redux";
import { changeWidth, changeHeight } from "../../store/ImageState";

const BackgroundImg = ({ imgPath }) => {
  const dispatch = useDispatch();
  const imgRef = useRef();

  useEffect(() => {
    console.log(imgPath);
    imgRef.current.src = imgPath;
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
