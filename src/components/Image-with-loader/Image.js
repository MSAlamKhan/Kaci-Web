import React, { useState } from "react";
import Loader from "../Loaders/Loader";

const Image = ({ url, alt, classes }) => {
  const [state, setState] = useState(true);

  return (
    <>
      {state && <Loader />}
      <img
        onLoad={() => setState(false)}
        className={classes}
        src={url}
        alt={alt}
      />
    </>
  );
};

export default Image;
