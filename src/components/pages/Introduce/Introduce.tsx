import { useMediaQuery, useTheme } from "@mui/material"
import { PCIntroducePage, SPIntroducePage } from "@/components/pages/Introduce"

export const IntroducePage = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))

return isPC? <PCIntroducePage /> : <SPIntroducePage />
}
