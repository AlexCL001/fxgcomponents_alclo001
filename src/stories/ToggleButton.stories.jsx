import React from 'react';
import './style.css'

import { ToggleButtonTest } from '../components/Collection/ToggleButtonTest';

export default {
    title: 'Components-TP1/Toggle Button',
    component: ToggleButtonTest,
};

const Template = (args) => <ToggleButtonTest {...args} />;

export const defaultOrientation = Template.bind({});
defaultOrientation.args = {
    oriented: "default",
};

export const horizontal = Template.bind({});
horizontal.args = {
    oriented: "horizontal",
};

export const vertical = Template.bind({});
vertical.args = {
    oriented: "vertical",
};



