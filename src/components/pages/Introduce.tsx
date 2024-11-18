import { useMediaQuery, useTheme } from "@mui/material"
import { PCIntroducePage } from "./PC/PCIntroducePage"
import { SPIntroducePage } from "./SP/SPIntroducePage"

export const IntroducePage = () => {
  const theme = useTheme()
  const isPc = useMediaQuery(theme.breakpoints.up('md'))

return isPc? <PCIntroducePage /> : <SPIntroducePage />
}
