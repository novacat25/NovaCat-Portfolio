import { useMediaQuery, useTheme } from "@mui/material"
import { PCProjectsPage, SPProjectsPage } from "@/components/pages/Projects"

export const ProjectsPage = () => {
    const theme = useTheme()
    const isPC = useMediaQuery(theme.breakpoints.up('md'))

  return isPC? <PCProjectsPage /> : <SPProjectsPage />
}
