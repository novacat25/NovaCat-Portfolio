import { Box, IconButton, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import React from "react"
import Link from "next/link"
import { colors } from "@/styles/colors"

type Props = {
    isPC?: boolean
}

export const ResponsibleFooterLayout = ({isPC = false}: Props) => {
  return (
    <Box
    display="flex"
    gap={isPC ? 1 :0.5}
    alignItems="center"
    justifySelf="right"
    sx={isPC? { px: 7.5, py: 3 } : { px: 3, py: 1.5 }}
  >
    <IconButton
      aria-label="github"
      size="small"
      sx={{ color: colors.text.primary }}
    >
      <Link href="https://github.com/novacat25" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </Link>
    </IconButton>
    <Typography fontSize={isPC? "16px" : "12px"}>© NovaCat 2024 All rights reserved.</Typography>
  </Box>
  )
}
