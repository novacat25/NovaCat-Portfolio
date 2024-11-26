import { colors } from "@/styles/colors"
import { Button } from "@mui/material"
import { LightbulbCircle, Send } from '@mui/icons-material'
import { useRouter } from "next/navigation"
import { H4Typography } from "../Typography/Heading/H4Typography"

type Props = {
  type?: "About" | "Contact"
}

export const IconLinkButton = ({ type = "About" }: Props) => {
  const router = useRouter()

  const handleClick = (toPage: "About" | "Contact") => {
    router.push(`${toPage.toLowerCase()}`)
  }

  const isAbout = (type === "About")
  const DISPLAY_MESSAGE = isAbout ? "About Me" : "Contact Me"

  return (
    <Button 
      onClick={()=>handleClick(type)} 
      variant={isAbout ? "contained" : "outlined"} 
      startIcon={isAbout ? <LightbulbCircle /> : <Send />} 
      sx={{ 
        px: 2.5,
        py: 1.5, 
        borderRadius: 4, 
        backgroundColor: isAbout ? colors.primary.main : colors.mono.white, 
        color: isAbout ? colors.mono.white : colors.primary.main, 
        boxShadow: 0 
      }}
    >
        <H4Typography isStrong color={isAbout ? colors.mono.white : colors.primary.main} sx={{ textTransform: "none" }}>
          {DISPLAY_MESSAGE}
        </H4Typography>
    </Button>
  )
}
