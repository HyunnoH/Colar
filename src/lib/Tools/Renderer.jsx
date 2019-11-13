import React from "react";

const Renderer = ({ src }) => {
  return (
    <div>
      <img src={src} alt={src} />
    </div>
  );
};

export default Renderer;
