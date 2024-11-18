import { HeaderButton } from '@/components/atoms/header'
import { PagesArray } from '@/constants/page'
import { Box } from "@mui/material"
import React, { Fragment } from "react"

export const PCMenuList = () => {
  return (
    <Box display="flex" gap={2}>
      {
        PagesArray.map((page) => (
          <Fragment key={page.id}>
            <HeaderButton toPage={page.name} />
          </Fragment>
        ))
      }
    </Box>
  )
}
