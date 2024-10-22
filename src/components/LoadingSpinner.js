import { CircularProgress } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className=' grid place-items-center fixed top-0 h-screen w-full ' >
      <CircularProgress/>
    </div>
  )
}

export default LoadingSpinner