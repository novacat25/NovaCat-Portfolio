import { SPMenuListItem } from '@/components/atoms/MenuItem/SPMenuListItem'
import { colors } from '@/styles/colors'
import { Stack } from "@mui/material"
import React from "react"

export const SPMenuList = () => {
  //TODO: code is not pretty

  return (
    <Stack spacing={1.5} pb={1} mt={-1} color={colors.header.main}>
      <SPMenuListItem toPage="About" />
      <SPMenuListItem toPage="Experiences" />
      <SPMenuListItem toPage="Projects" />
      <SPMenuListItem toPage="Blog" />
      <SPMenuListItem toPage="History" />
      <SPMenuListItem toPage="Contact" />
  </Stack>
  )
}
