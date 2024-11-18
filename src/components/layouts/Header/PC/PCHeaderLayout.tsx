import { Logo } from "@/components/atoms/Logo/Logo"
import { PCMenuList } from "@/components/molecules/MenuList/PCMenuList/PCMenuList"
import { colors } from "@/styles/colors"
import {
  AppBar,
  Box,
} from "@mui/material"
import React from "react"

export const PCHeaderLayout = () => {
  return (
    <Box pb={11} sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          px: 7.5,
          py: 1.5,
          color: colors.header.main,
          backgroundColor: colors.header.background,
          boxShadow: 3,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Logo />
          <PCMenuList />
        </Box>
      </AppBar>
    </Box>
  )
}
