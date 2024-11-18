import {
  useMediaQuery,
  useTheme,
} from "@mui/material"
import React from "react"
import { PCHeaderLayout } from "./PC/PCHeaderLayout"
import { SPHeaderLayout } from "./SP/SPHeaderLayout"

export const Header = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up("md"))

  return isPC ? <PCHeaderLayout /> : <SPHeaderLayout />
}
