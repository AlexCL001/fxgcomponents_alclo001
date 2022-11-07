import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export const TypoTest = ({ variation }) => {
  return (
    <Typography variant={variation} component={variation}>Type of Typography {variation}</Typography>
  );
};

TypoTest.propTypes = {
  variation: PropTypes.string,
};
