import { IconLinkButton } from "@/components/atoms/Button/IconLinkButton"
import { Subtitle2Typography } from "@/components/atoms/Typography/Subtitle/Subtitle2Typography"
import { TitleTypography } from "@/components/atoms/Typography/Title/TitleTypography"
import { colors } from "@/styles/colors"
import { Box, Paper, Skeleton } from "@mui/material"

export const PCIntroducePage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 7.5 , pl: 7.5, pb: 20 }}>
      <Box display="flex" alignItems="center" gap={4.5}>
        <Skeleton variant="circular" width={546} height={546} />
        <Box>
          <TitleTypography colorType="introduce">I'm NovaCat.</TitleTypography>
          <Subtitle2Typography mt={-3} colorType="introduce">Web Engineer・Developer</Subtitle2Typography>
          <Box pt={2} display="flex" gap={2}>
            <IconLinkButton type="About" />
            <IconLinkButton type="Contact" />
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
