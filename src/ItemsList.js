import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PptFile from "./PptFile/PptFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LinearProgress from "@mui/joy/LinearProgress";
import { getAllPptFilesByCategory, getAllPptFiles } from './DataApi';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

const LoadingContainer = styled(Box)({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999, // Ensure the loading animation is on top of other elements
});

const ItemList = ({ category_id }) => {
  const [items, setItems] = useState([]);
  const [showPpt, setShowPpt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pptLoaded, setPptLoaded] = useState(false);
  const [clickedFile, setClickedFile] = useState(null); // Use state to store the clicked file

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pptFiles = await getAllPptFilesByCategory(category_id); // Fetch PPT files from API
        console.log(pptFiles);
        setItems(pptFiles);
      } catch (error) {
        console.error('Error fetching PPT files:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (fileLink) => {
    console.log(`Button ${fileLink} clicked!`);
    setClickedFile(fileLink); // Update clickedFile state with the file link

    if (showPpt) {
      setShowPpt(false);
      setPptLoaded(false);
    } else {
      setShowPpt(true);
      setLoading(true);
    }
  };

  const addItem = () => {
    const newItem = String.fromCharCode(items.length + 65);
    setItems([...items, newItem]);
  };

  const handleLoadComplete = () => {
    setLoading(false);
    setPptLoaded(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {!showPpt && (
        <Grid container rowSpacing={1} columnSpacing={1}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <StyledButton onClick={() => handleClick(item.file_link)}>
                {item.file_name} {/* Render the file name instead of item */}
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

          <PptFile onLoadComplete={handleLoadComplete} linkToPPTFile={clickedFile} /> {/* Pass clickedFile as prop */}
        </div>
      )}

      {loading && ( /* Display loading indicator */
        <LoadingContainer>
          <LinearProgress variant="indeterminate" />
        </LoadingContainer>
      )}
    </Box>
  );
}

export default ItemList;
