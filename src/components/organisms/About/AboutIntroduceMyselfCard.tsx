import { AboutMyself } from "@/components/atoms/About"
import { Paper, Stack } from "@mui/material"
import React from "react"
import { Airplay, Dvr } from '@mui/icons-material'
  
export const AboutIntroduceMyselfCard = () => {
  return (
    <Paper elevation={0} sx={{ px: 2.5, py: 4 }}>
        <Stack spacing={1.5}>
            <AboutMyself Icon={Airplay}>Web Developer・Engineer</AboutMyself>
            <AboutMyself Icon={Dvr}>UI/UX Enthusiast</AboutMyself>
        </Stack>
    </Paper>
  )
}
  