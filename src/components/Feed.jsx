import React from 'react'
import { Box } from '@mui/material'
import { Post } from './Post';


export const Feed = () => {
  return (
    <Box flex={4} p={2} >
      {[...Array(4)].map((_, i) =>
        <Post key={i} />)}
    </Box>
  )
}
