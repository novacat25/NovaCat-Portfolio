import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { PROJECTS_CARD_SIZE } from "@/constants/size"

type Props = {
  isMobile?: boolean
}

export const ProjectCard = ({ isMobile = false }: Props) => {
  return (
    <Card sx={{ borderRadius: '24px', width: isMobile ? 0.75 * PROJECTS_CARD_SIZE : PROJECTS_CARD_SIZE, height: isMobile ? 0.75 * PROJECTS_CARD_SIZE : PROJECTS_CARD_SIZE }}>
      <CardContent sx={{ pt: 4 }}>
        image
      </CardContent>
      <CardContent>
        textlist
      </CardContent>
  </Card>    
  )
}
