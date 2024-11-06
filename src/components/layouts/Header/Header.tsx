import { Logo } from '@/components/atoms/Logo/Logo'
import { PCMenuList } from '@/components/molecules/PCMenuList/PCMenuList'
import { colors } from '@/styles/colors'
import { AppBar, Box } from '@mui/material'
import React from 'react'

export const Header = () => {
  const PC = () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ px: 7.5, py: 2, color: colors.header.main, backgroundColor: colors.header.background, boxShadow: 3 }}>
          <Box display="flex" justifyContent="space-between">
            <Logo />  
            <PCMenuList />
          </Box>
      </AppBar>
  </Box>
  )

  return <PC />
}
