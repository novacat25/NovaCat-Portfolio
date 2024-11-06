import { Box, IconButton, Typography } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import React from "react"
import Link from "next/link"
import { colors } from "@/styles/colors"
import useMediaQuery from '@mui/material/useMediaQuery'

export const Footer = () => {
  const matches = useMediaQuery('(min-width:600px)')
  
  const PC = () => (
    <div className="max-lg:hidden">
      <Box
        display="flex"
        gap={1}
        alignItems="center"
        justifySelf="right"
        sx={{ px: 7.5, py: 3 }}
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
        <Typography>© NovaCat 2024 All rights reserved.</Typography>
      </Box>
    </div>
  )

  const SP = () => (
    <div className="lg:hidden">
      <Box
        display="flex"
        gap={0.5}
        alignItems="center"
        justifySelf="right"
        sx={{ px: 3, py: 1.5 }}
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
        <Typography fontSize="12px">© NovaCat 2024 All rights reserved.</Typography>
      </Box>
    </div>
  )

  return (
    <>      
      <SP />
      <PC />
    </>
  )
}
