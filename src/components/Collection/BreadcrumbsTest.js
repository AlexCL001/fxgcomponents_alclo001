import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Breadcrumbs, Link, Typography } from '@mui/material'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export const BreadcrumbsTest = ({ separate }) => {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Core
        </Link>,
        <Typography key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator={separate} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}

BreadcrumbsTest.propTypes = {
    separate: PropTypes.string,
}
