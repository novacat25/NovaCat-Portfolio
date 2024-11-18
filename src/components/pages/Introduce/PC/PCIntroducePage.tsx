import { IntroduceButtonGroup, IntroduceSentence } from "@/components/organisms/Introduce"
import { INTRODUCE_PC } from "@/constants/image_size"
import { colors } from "@/styles/colors"
import { Box, Paper, Skeleton } from "@mui/material"

export const PCIntroducePage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 7.5 , pl: 7.5, pb: 20 }}>
      <Box display="flex" alignItems="center" gap={4.5}>
        <Skeleton variant="circular" width={INTRODUCE_PC} height={INTRODUCE_PC} />
        <Box>
          <IntroduceSentence />
          <IntroduceButtonGroup />
        </Box>
      </Box>
    </Paper>
  )
}
