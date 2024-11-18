import { colors } from "@/styles/colors"
import { Box, Paper, Skeleton, Stack, useMediaQuery, useTheme } from "@mui/material"
import { TitleTypography } from "../atoms/Typography/Title/TitleTypography"
import { Subtitle2Typography } from "../atoms/Typography/Subtitle/Subtitle2Typography"
import { H3Typography } from "../atoms/Typography/Heading/H3Typography"

export const IntroducePage = () => {
  const theme = useTheme()
  const isPc = useMediaQuery(theme.breakpoints.up('md'))

  const PC = () => (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, py: 7.5 , pl: 7.5 }}>
      <Box display="flex" alignItems="center" gap={4.5}>
        <Skeleton variant="circular" width={546} height={546} />
        <Box>
          <TitleTypography colorType="introduce">I'm NovaCat.</TitleTypography>
          <Subtitle2Typography mt={-3} colorType="introduce">Web Engineer・Developer</Subtitle2Typography>
          <Box pt={2} display="flex" gap={2}>
            <p>Button 1</p>
            <p>Button 2</p>
          </Box>
        </Box>
      </Box>
    </Paper>
  )

  const SP = () => (
      <Paper elevation={0} sx={{ backgroundColor: colors.background.main, p: 2 }}>
        <Stack alignItems='center'>
          <Skeleton variant="circular" width={327} height={327} />
          <TitleTypography colorType="introduce" isMobile>I'm NovaCat.</TitleTypography>
          <H3Typography mt={-1} colorType="introduce">Web Engineer・Developer</H3Typography>
          <Box pt={1} display="flex" gap={1}>
            <p>Button 1</p>
            <p>Button 2</p>
          </Box>
        </Stack>
      </Paper>
  )

return isPc? <PC /> : <SP />
}
