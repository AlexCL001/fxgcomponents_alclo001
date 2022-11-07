import React from 'react';
import './style.css'

import { TypoTest } from '../components/Collection/TypoTest';

export default {
   title: 'Components-TP1/Typography',
   component: TypoTest,
};

const Template = (args) => <TypoTest {...args} />;

export const h1Title = Template.bind({});
h1Title.args = {
   variation: "h1",
};

export const h2Title = Template.bind({});
h2Title.args = {
   variation: "h2",
};

export const h3Title = Template.bind({});
h3Title.args = {
   variation: "h3",
};

export const h4Title = Template.bind({});
h4Title.args = {
   variation: "h4",
};

export const h5Title = Template.bind({});
h5Title.args = {
   variation: "h5",
};

export const h6Title = Template.bind({});
h6Title.args = {
   variation: "h6",
};