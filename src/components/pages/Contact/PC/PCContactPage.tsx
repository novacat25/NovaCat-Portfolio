import { H1Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Paper } from "@mui/material"

export const PCContactPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 2, pl: 7, pb: 20 }}>
      <H1Typography fontWeight="bold" color={colors.primary.secondary}>Contact Me</H1Typography>
    </Paper>
  )
}
