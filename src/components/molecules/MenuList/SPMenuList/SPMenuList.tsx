import { SPMenuListItem } from '@/components/atoms/header'
import { PagesArray } from '@/constants/page'
import { colors } from '@/styles/colors'
import { Stack } from "@mui/material"
import React, { Fragment } from "react"

export const SPMenuList = () => {
  return (
    <Stack spacing={1.5} pb={1} mt={-1} color={colors.header.main}>
      {
        PagesArray.map((page) => (
          <Fragment key={page.id}>
            <SPMenuListItem toPage={page.name} />
          </Fragment>
        ))
      }
  </Stack>
  )
}
