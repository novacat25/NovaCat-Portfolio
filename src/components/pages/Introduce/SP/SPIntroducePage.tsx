import { IntroduceButtonGroup, IntroduceSentence } from "@/components/organisms/Introduce"
import { INTRODUCE_SP } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Paper, Skeleton, Stack } from "@mui/material"

export const SPIntroducePage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, py: 2, pb: 6 }}>
      <Stack alignItems='center'>
        <Skeleton variant="circular" width={INTRODUCE_SP} height={INTRODUCE_SP} />
        <IntroduceSentence isMobile />
        <IntroduceButtonGroup isMobile />
      </Stack>
    </Paper>
)
}
