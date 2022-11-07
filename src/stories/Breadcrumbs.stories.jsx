import React from 'react';
import './style.css'

import { BreadcrumbsTest } from '../components/Collection/BreadcrumbsTest';

export default {
    title: 'Components-TP1/Breadcrumbs',
    component: BreadcrumbsTest,
};

const Template = (args) => <BreadcrumbsTest {...args} />;

export const slash = Template.bind({});
slash.args = {
    separate: "/",
};

export const union = Template.bind({});
union.args = {
    separate: "-",
};

export const arrow = Template.bind({});
arrow.args = {
    separate: ">",
};

export const bigArrow = Template.bind({});
bigArrow.args = {
    separate: "--->",
};





