import { useTheme } from "@mui/material"
import React from "react"
import useMediaQuery from '@mui/material/useMediaQuery'
import { ResponsibleFooterLayout } from "./ResponsibleFooterLayout"

export const Footer = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))

  return <ResponsibleFooterLayout isPC={isPC} />
}
