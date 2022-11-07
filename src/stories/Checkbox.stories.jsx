import React from 'react';
import './style.css'

import { CheckboxTest } from '../components/Collection/CheckboxTest';

export default {
    title: 'Components-TP1/Checkbox',
    component: CheckboxTest,
};

const Template = (args) => <CheckboxTest {...args} />;

export const primary = Template.bind({});
primary.args = {
    color: "primary",
};

export const secondary = Template.bind({});
secondary.args = {
    color: "secondary",
};

export const error = Template.bind({});
error.args = {
    color: "error",
};

export const info = Template.bind({});
info.args = {
    color: "info",
};

export const success = Template.bind({});
success.args = {
    color: "success",
};

export const warning = Template.bind({});
warning.args = {
    color: "warning",
};







