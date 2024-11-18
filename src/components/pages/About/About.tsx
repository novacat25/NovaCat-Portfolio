import { useMediaQuery, useTheme } from "@mui/material"
import { PCAboutPage, SPAboutPage } from "@/components/pages/About"

export const AboutPage = () => {
    const theme = useTheme()
    const isPC = useMediaQuery(theme.breakpoints.up('md'))

  return isPC? <PCAboutPage /> : <SPAboutPage />
}
