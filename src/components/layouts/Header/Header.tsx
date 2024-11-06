import { Logo } from '@/components/atoms/Logo/Logo'
import { colors } from '@/styles/colors'
import { AppBar, Box, Button } from '@mui/material'
import React from 'react'

export const Header = () => {
  const pc = () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 7.5, py: 2, color: colors.header.main, backgroundColor: colors.header.background, boxShadow: 3 }}>
          <Box display="flex" justifyContent="space-between">
            <Logo />  
            {/* TODO: Make these as component tsx files */}
            <Box display="flex" gap={3}>
              <Button color="inherit">About</Button>
              <Button color="inherit">Experiences</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">History</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          </Box>
      </AppBar>
  </Box>
  )

  return pc()
}
