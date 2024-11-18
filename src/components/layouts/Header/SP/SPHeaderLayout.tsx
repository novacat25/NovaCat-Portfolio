import { Logo } from "@/components/atoms/Logo/Logo"
import { colors } from "@/styles/colors"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React from "react"
import { SPMenuList } from "@/components/molecules/MenuList/SPMenuList/SPMenuList"

export const SPHeaderLayout = () => {
  return (
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
        <AccordionDetails sx={{ display: 'inline-block' }}>
          <SPMenuList />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
