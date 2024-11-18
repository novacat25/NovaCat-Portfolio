import {
  useMediaQuery,
  useTheme,
} from "@mui/material"
import React from "react"
import { PCHeaderLayout, SPHeaderLayout } from "@/components/layouts/Header"

export const Header = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up("md"))

  return isPC ? <PCHeaderLayout /> : <SPHeaderLayout />
}
