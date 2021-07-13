import React from "react";
import Iframe from "react-iframe";

const SomeIFrame = () => {
  return (
    <Iframe
      url="https://umapped.com/"
      width="100%"
      height="800px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  );
};

export default SomeIFrame;
