import { useTheme } from "@mui/material"
import React from "react"
import useMediaQuery from '@mui/material/useMediaQuery'
import { PCFooterLayout } from "./PC/PCFooterLayout"
import { SPFooterLayout } from "./SP/SPFooterLayout"

export const Footer = () => {
  const theme = useTheme()
  const isPc = useMediaQuery(theme.breakpoints.up('md'))

  return (isPc ? <PCFooterLayout /> : <SPFooterLayout />)
}
