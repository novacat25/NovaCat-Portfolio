import { Logo } from "@/components/atoms/Logo/Logo"
import { PCMenuList } from "@/components/molecules/PCMenuList/PCMenuList"
import { colors } from "@/styles/colors"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React from "react"
import { SPMenuList } from "@/components/molecules/SPMenuList/SPMenuList"

export const Header = () => {
  const theme = useTheme()
  const isPc = useMediaQuery(theme.breakpoints.up("md"))

  const PC = () => (
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

  const SP = () => (
    <Box pb={9}>
      <Accordion
        sx={{
          zIndex: 999,
          backgroundColor: colors.header.background,
          position: "fixed",
          width: "100%",
          boxShadow: 3,
        }}
      >
        <AccordionSummary
          expandIcon={
            <MenuIcon fontSize="large" sx={{ color: colors.header.main }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Logo isMobile />
        </AccordionSummary>
        <AccordionDetails>
          <SPMenuList />
        </AccordionDetails>
      </Accordion>
    </Box>
  )

  return isPc ? <PC /> : <SP />
}
