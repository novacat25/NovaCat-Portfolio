import { H3Typography, Subtitle1Typography, Subtitle2Typography } from "@/components/atoms/Typography"
import { AboutForum, AboutGreeting, AboutIntroduceMyselfCard } from "@/components/organisms/About"
import { ABOUT_PC } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Box, Paper, Skeleton } from "@mui/material"

export const PCAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 7.5 , px: 15, pb: 20 }}>
      <Box display="flex" alignItems="center" gap={12}>
        <Box sx={{ width: '100%' }}>
          <Skeleton variant="circular" width={ABOUT_PC} height={ABOUT_PC} />
        </Box>
        <Box>
          <AboutGreeting />
          <AboutForum />
          <AboutIntroduceMyselfCard />
        </Box>
      </Box>
    </Paper>
    )
}
