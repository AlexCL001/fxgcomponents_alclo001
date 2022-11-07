import React from 'react';
import './style.css'

import { ProgressTest } from '../components/Collection/ProgressTest';

export default {
    title: 'Components-TP1/Circular Progress',
    component: ProgressTest,
};

const Template = (args) => <ProgressTest {...args} />;

export const smallSuccess = Template.bind({});
smallSuccess.args = {
    colorTheme: "success",
    sizeTheme: 25,
};

export const mediumWarning = Template.bind({});
mediumWarning.args = {
    colorTheme: "warning",
    sizeTheme: 75,
};

export const largeError = Template.bind({});
largeError.args = {
    colorTheme: "error",
    sizeTheme: 200,
};