import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox';

export const CheckboxTest = ({ color }) => {
    return (
        <div>
            <Checkbox color={color} defaultChecked />
            <Checkbox color={color} />
            <Checkbox color={color} disabled />
            <Checkbox color={color} disabled checked />
        </div>
    )
}

CheckboxTest.propTypes = {
    color: PropTypes.string,
}

