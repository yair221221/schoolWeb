import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PptFile from "./PptFile/PptFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

export default function RowAndColumnSpacing() {
  const [items, setItems] = useState(["1", "2", "3", "4"]);
  const [showPpt, setShowPpt] = useState(false); // State to control the visibility of PptFile component

  const handleClick = (number) => {
    console.log(`Button ${number} clicked!`);
    // Add your custom logic here
    if (showPpt) {
        setShowPpt(false);
    } else {
      setShowPpt(true); // Set showPpt to true to render the PptFile component
    }
  };

  const addItem = () => {
    const newItem = String.fromCharCode(items.length + 65); // Converts number to alphabet (A, B, C, ...)
    setItems([...items, newItem]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!showPpt && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          {items.map((item, index) => (
            <Grid key={index} xs={3}>
              <StyledButton onClick={() => handleClick(item)}>
                {item}
              </StyledButton>
            </Grid>
          ))}
        </Grid>
      )}

      {showPpt && (
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ marginRight: "8px" }}
              />
              Back
            </Box>
          </Button>
          <PptFile />
        </div>
      )}
    </Box>
  );
}
