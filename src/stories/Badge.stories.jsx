import React from 'react';
import './style.css'

import { BadgeTest } from '../components/Collection/BadgeTest';

export default {
   title: 'Components-TP1/Badge',
   component: BadgeTest,
};

const Template = (args) => <BadgeTest {...args} />;

export const primary = Template.bind({});
primary.args = {
   badgeTheme: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
   badgeTheme: "secondary",
};

export const error = Template.bind({});
error.args = {
   badgeTheme: "error",
};

export const success = Template.bind({});
success.args = {
   badgeTheme: "success",
};

export const warning = Template.bind({});
warning.args = {
   badgeTheme: "warning",
};

export const info = Template.bind({});
info.args = {
   badgeTheme: "info",
};


