import React from 'react';
import './style.css'

import { SliderTest } from '../components/Collection/SliderTest';

export default {
   title: 'Components-TP1/Slider',
   component: SliderTest,
};

const Template = (args) => <SliderTest {...args} />;

export const sizeDefault = Template.bind({});
sizeDefault.args = {
   sizeTheme: "default",
};

export const sizeSmall = Template.bind({});
sizeSmall.args = {
   sizeTheme: "small",
};

export const sizeMedium = Template.bind({});
sizeMedium.args = {
   sizeTheme: "medium",
};


