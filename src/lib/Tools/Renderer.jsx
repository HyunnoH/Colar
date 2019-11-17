import React from "react";

const Renderer = ({ src, imgstyle }) => {
  return <img src={src} alt={src} className={imgstyle} />;
};

export default Renderer;
