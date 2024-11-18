import { P1Typography, Subtitle3Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Box, Divider } from "@mui/material"

type Props = {
    isMobile?: boolean
}
export const AboutForum = ({ isMobile = false }: Props) => {
  return (
    <Box px={isMobile ? 2 : 0} pt={2}>
    <Subtitle3Typography color={colors.primary.tertiary}>Founder</Subtitle3Typography>
    <Box py={2} display='flex' alignItems="center" gap={1} color={colors.primary.tertiary}>
      <Divider orientation="vertical" flexItem sx={{ backgroundColor: colors.primary.secondary, borderBottomWidth: 5 }} />
      <P1Typography color="inherit" display="inline-block" textAlign="justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </P1Typography>
    </Box>
  </Box>
  )
}
