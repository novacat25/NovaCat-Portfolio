import { HeaderButton } from '@/components/atoms/Button'
import { Box } from "@mui/material"
import React from "react"

export const PCMenuList = () => {
  return (
    <Box display="flex" gap={2}>
      <HeaderButton toPage="About" />
      <HeaderButton toPage="Experiences" />
      <HeaderButton toPage="Projects" />
      <HeaderButton toPage="Blog" />
      <HeaderButton toPage="History" />
      <HeaderButton toPage="Contact" />
    </Box>
  )
}
