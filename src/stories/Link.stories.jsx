import React from 'react';
import './style.css'

import { LinkTest } from '../components/Collection/LinkTest';

export default {
    title: 'Components-TP1/Link',
    component: LinkTest,
};

const Template = (args) => <LinkTest {...args} />;

export const none = Template.bind({});
none.args = {
    link: "none",
};

export const hover = Template.bind({});
hover.args = {
    link: "hover",
};

export const always = Template.bind({});
always.args = {
    link: "always",
};





