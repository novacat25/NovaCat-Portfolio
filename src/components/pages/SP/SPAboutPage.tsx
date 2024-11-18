import { TitleTypography, H3Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Paper, Skeleton, Stack } from "@mui/material"

export const SPAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, p: 2 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={327} height={327} />
        <TitleTypography colorType="introduce" isMobile>I'm NovaCat.</TitleTypography>
        <H3Typography mt={-1} colorType="introduce">Web Engineer・Developer</H3Typography>
      </Stack>
    </Paper>
)
}
