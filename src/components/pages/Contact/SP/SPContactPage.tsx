import { H4Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Paper } from "@mui/material"

export const SPContactPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, py: 2, pb: 6 }}>
      <H4Typography fontWeight="bold" color={colors.primary.secondary}>Contact Me</H4Typography>
    </Paper>
)
}
