import React from 'react';
import './style.css'

import { ButtonTest } from '../components/Collection/ButtonTest';

export default {
    title: 'Components-TP1/Button',
    component: ButtonTest,
};

const Template = (args) => <ButtonTest {...args} />;

export const text = Template.bind({});
text.args = {
    variation: "text",
    colorTheme: "success",
    buttonText: "Success Text",
};

export const contained = Template.bind({});
contained.args = {
    variation: "contained",
    colorTheme: "error",
    buttonText: "Error Contained",
};

export const outlined = Template.bind({});
outlined.args = {
    variation: "outlined",
    colorTheme: "warning",
    buttonText: "Warning Outlined",
};

export const Patate = Template.bind({});
Patate.args = {
    variation: "outlined",
    colorTheme: "warning",
    buttonText: "Patate",
};





