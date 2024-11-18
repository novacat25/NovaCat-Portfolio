import { Logo } from "@/components/atoms/Logo"
import { colors } from "@/styles/colors"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React, { useState } from "react"
import { SPMenuList } from "@/components/molecules/MenuList/SPMenuList"

export const SPHeaderLayout = () => {
  const [expanded, setExpanded] = useState(false)
  
  const handleToggle = () => setExpanded(!expanded)
  const handleClose = () => setExpanded(false)
  
  return (
    <Box pb={9}>
      <Accordion
        expanded={expanded}
        onChange={handleToggle}
        sx={{
          zIndex: 999,
          backgroundColor: colors.header.background,
          position: "fixed",
          width: "100%",
          boxShadow: 3,
          pointerEvents: "none"
        }}
      >
        <AccordionSummary
          expandIcon={
            <MenuIcon fontSize="large" sx={{ color: colors.header.main, pointerEvents: "auto" }} />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Box sx={{ pointerEvents: "auto" }}>
          <Logo onClick={(e)=>{
            if(!expanded) e.stopPropagation()
            handleClose()
          }} isMobile />
        </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'inline-block', pointerEvents: "auto" }}>
          <SPMenuList onClick={handleClose} />
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
