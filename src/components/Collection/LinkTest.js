import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@mui/material'

export const LinkTest = ({ link }) => {
    return (
        <div>
            <Link href="#" underline={link}>
                underline="{link}"
            </Link>
        </div>
    );
}

LinkTest.propTypes = {
    link: PropTypes.string,
}
