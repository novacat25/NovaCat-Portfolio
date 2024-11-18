import { H3Typography, Subtitle1Typography, Subtitle2Typography } from "@/components/atoms/Typography"
import { AboutIntroduceMyselfCard } from "@/components/organisms/About"
import { ABOUT_PC } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Box, Divider, Paper, Skeleton } from "@mui/material"

export const PCAboutPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 7.5 , pl: 15, pb: 20 }}>
      <Box display="flex" alignItems="center" gap={12}>
        <Skeleton variant="circular" width={ABOUT_PC} height={ABOUT_PC} />
        <Box>
          <Subtitle1Typography colorType="introduce">Hello!<br />My Name is NovaCat.</Subtitle1Typography>
          <Subtitle2Typography color={colors.primary.secondary}>Web Engineer・Developer</Subtitle2Typography>
          <H3Typography color={colors.primary.secondary}>FrontEnd Engineer・UI/UX enthusiast</H3Typography>
          <Box py={4}>
            <Divider orientation="vertical" flexItem />
            Textbox here!
          </Box>
          <AboutIntroduceMyselfCard />
        </Box>
      </Box>
    </Paper>
    )
}
