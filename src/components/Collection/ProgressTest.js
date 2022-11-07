import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

export const ProgressTest = ({ colorTheme, sizeTheme }) => {
  return <CircularProgress color={colorTheme} size={sizeTheme} />;
};

ProgressTest.propTypes = {
  colorTheme: PropTypes.string,
  sizeTheme: PropTypes.number,
};
