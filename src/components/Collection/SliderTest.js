import React from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export const SliderTest = ({ sizeTheme }) => {
  return (
    <Box width={300}>
      <Slider
        size={sizeTheme}
        defaultValue={20}
        valueLabelDisplay="auto"
        sx={{ mt: "30px" }}
      />
    </Box>
  );
};

SliderTest.propTypes = {
  sizeTheme: PropTypes.string,
};
