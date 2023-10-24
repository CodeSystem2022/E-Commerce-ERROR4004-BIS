import React from 'react'

import { Box, CircularProgress, Typography } from '@mui/material'

const FullScreenLoading = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      height='calc(100vh - 200px)'
    >
      <Typography variant='h2' component='h2' mx={ 2 } my={ 2 }>
        Loading...
      </Typography>
      <CircularProgress thickness={ 3 } color='primary' />
    </Box>
  )
}

export default FullScreenLoading