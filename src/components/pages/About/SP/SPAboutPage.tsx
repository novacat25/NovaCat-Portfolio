import { AboutForum, AboutGreeting, AboutIntroduceMyselfCard } from "@/components/organisms/About"
import { ABOUT_SP } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Paper, Skeleton, Stack } from "@mui/material"

export const SPAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, pt: 2, pb: 6 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={ABOUT_SP} height={ABOUT_SP} />
        <AboutGreeting isMobile />
        <AboutForum isMobile />
        <AboutIntroduceMyselfCard />
      </Stack>
    </Paper>
)
}
