import { Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {

  return (
    <Box display="flex" gap={1} alignContent="center" justifySelf="right" sx={{ px: 7.5, py: 3 }}>
        <Link href="https://github.com/novacat25" target="_blank">
         <GitHubIcon />
        </Link>
      <Typography>© NovaCat 2024 All rights reserved.</Typography>
    </Box>
  )
}
