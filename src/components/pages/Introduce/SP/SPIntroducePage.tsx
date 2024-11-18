import { IconLinkButton } from "@/components/atoms/Button"
import { TitleTypography, H3Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Box, Paper, Skeleton, Stack } from "@mui/material"

export const SPIntroducePage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, py: 2, pb: 6 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={327} height={327} />
        <TitleTypography colorType="introduce" isMobile>I'm NovaCat.</TitleTypography>
        <H3Typography mt={-1} colorType="introduce">Web Engineer・Developer</H3Typography>
        <Box pt={1} display="flex" gap={1}>
          <IconLinkButton type="About" />
          <IconLinkButton type="Contact" />
        </Box>
      </Stack>
    </Paper>
)
}
