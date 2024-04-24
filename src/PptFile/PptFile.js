import React from "react";

const linkToPPTFile =
  "https://onedrive.live.com/embed?resid=618985D7AF6B5830%21136071&authkey=!APdfP_pHZ-jhH7U&em=2";

const containerStyle = {
  height: "95%", // Set the container height to 90% of its parent
  overflow: "hidden" // Hide overflowing content
};

export default function PptFile() {
  return (
    <div style={containerStyle}>
        
      <iframe
        src={linkToPPTFile}
        width="100%"
        height="600px"

        frameBorder="0"
        title="slides"
        scrolling="no"
        // Move iframe up by 10% to hide bottom part
      ></iframe>
    </div>
  );
}
