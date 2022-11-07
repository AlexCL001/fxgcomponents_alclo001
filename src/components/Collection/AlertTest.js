import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from '@mui/material'

export const AlertTest = ({ severityTest }) => {
    return (
        <div>
            <Alert severity={severityTest} />
        </div>
    )
}

AlertTest.propTypes = {
    severityTest: PropTypes.string,
}
