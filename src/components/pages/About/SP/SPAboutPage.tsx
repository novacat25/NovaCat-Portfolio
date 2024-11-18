import { H4Typography, P3Typography } from "@/components/atoms/Typography"
import { AboutIntroduceMyselfCard } from "@/components/organisms/About"
import { ABOUT_SP } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Paper, Skeleton, Stack } from "@mui/material"

export const SPAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, pt: 2, pb: 6 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={ABOUT_SP} height={ABOUT_SP} />
        <Stack alignItems="center" pt={2.5}>
          <H4Typography isStrong colorType="introduce" textAlign="center">Hello!<br />My Name is NovaCat.</H4Typography>
          <P3Typography color={colors.primary.secondary}>Web Engineer・Developer</P3Typography>
        </Stack>
        <AboutIntroduceMyselfCard />
      </Stack>
    </Paper>
)
}
