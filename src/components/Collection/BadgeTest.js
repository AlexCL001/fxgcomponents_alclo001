import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from "prop-types";

export const BadgeTest = ({ badgeTheme }) => {
  return (
    <Badge badgeContent={4} color={badgeTheme}>
      <MailIcon color="action" />
    </Badge>
  );
};

BadgeTest.propTypes = {
  badgeTheme: PropTypes.string,
};
