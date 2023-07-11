import { Typography } from '@mui/material'
import React from 'react'

const ErrorPage = (props) => {
  return (
    <Typography variant="h3">{props.errorMessage}</Typography>
  )
}

export default ErrorPage