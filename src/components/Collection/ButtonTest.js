import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

export const ButtonTest = ({ variation, colorTheme, buttonText }) => {
    return (
        <div>
            <Button variant={variation} color={colorTheme}>{buttonText}</Button>
        </div>
    )
}

ButtonTest.propTypes = {
    variation: PropTypes.string,
    colorTheme: PropTypes.string,
    buttonText: PropTypes.string,
}
