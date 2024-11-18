import { useMediaQuery, useTheme } from "@mui/material"
import { PCAboutPage } from "./PC/PCAboutPage"
import { SPAboutPage } from "./SP/SPAboutPage"

export const AboutPage = () => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('md'))

  return isPc? <PCAboutPage /> : <SPAboutPage />
}
