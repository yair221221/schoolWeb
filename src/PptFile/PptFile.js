import React, { useState } from "react";
import LinearProgress from "@mui/joy/LinearProgress";


const containerStyle = {
  position: "relative",
  width: "100%",
  height: "545px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const PptFile = (props) => {
  const { linkToPPTFile } = props;

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      {loading && <LinearProgress variant="solid" />}

      <iframe
        src={linkToPPTFile}
        width="100%"
        height="600px"
        title="slides"
        onLoad={handleLoad}
        style={{ display: loading ? "none" : "block" }}
      ></iframe>
    </div>
  );
}

export default PptFile;
