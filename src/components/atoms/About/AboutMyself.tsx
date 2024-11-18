import { colors } from "@/styles/colors"
import { H4Typography } from "../Typography"
import { Box } from "@mui/material"

type Props = {
    children: string
    Icon: React.ElementType
}

export const AboutMyself = ({ children, Icon }: Props) => {
  return (
    <Box display="flex" alignItems='center' gap={1.5} color={colors.primary.tertiary}>
      <Icon />
      <H4Typography color="inherit">{children}</H4Typography>
    </Box>
  )
}
