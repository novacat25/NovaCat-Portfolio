import { AboutForum, AboutGreeting, AboutIntroduceMyselfCard } from "@/components/organisms/About"
import { ABOUT_IMAGE_SP } from "@/constants/size"
import { colors } from "@/styles/colors"
import { Paper, Skeleton, Stack } from "@mui/material"

export const SPAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, pt: 2, pb: 6 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={ABOUT_IMAGE_SP} height={ABOUT_IMAGE_SP} />
        <AboutGreeting isMobile />
        <AboutForum isMobile />
        <AboutIntroduceMyselfCard />
      </Stack>
    </Paper>
)
}
