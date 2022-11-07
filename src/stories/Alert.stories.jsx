
import React from 'react';
import './style.css'

import { AlertTest } from '../components/Collection/AlertTest';

export default {
   title: 'Components-TP1/Alert',
   component: AlertTest,
};

const Template = (args) => <AlertTest {...args} />;

export const success = Template.bind({});
success.args = {
   severityTest: "success"
};

export const error = Template.bind({});
error.args = {
   severityTest: "error"
};

export const info = Template.bind({});
info.args = {
   severityTest: "info"
};

export const warning = Template.bind({});
warning.args = {
   severityTest: "warning"
};






