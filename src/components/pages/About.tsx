import { colors } from "@/styles/colors"
import { Paper, useMediaQuery, useTheme } from "@mui/material"

export const AboutPage = () => {
    const theme = useTheme()
    const isPc = useMediaQuery(theme.breakpoints.up('md'))

    const PC = () => (
        <Paper elevation={0} sx={{ backgroundColor: colors.background.main, p: 7.5 }}>
            About page.
        </Paper>
    )

    const SP = () => (
        <Paper elevation={0} sx={{ backgroundColor: colors.background.main, p: 2 }}>
            About page.
        </Paper>
    )

  return isPc? <PC /> : <SP />
}
