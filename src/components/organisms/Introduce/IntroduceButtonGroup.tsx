import { IconLinkButton } from "@/components/atoms/Button"
import { Box } from "@mui/material"

type Props = {
    isMobile?: boolean
}

export const IntroduceButtonGroup = ({ isMobile = false }: Props) => {
    const space = isMobile ? 1 : 2

  return (
    <Box display="flex" pt={space} gap={space}>
        <IconLinkButton type="About" />
        <IconLinkButton type="Contact" />
    </Box>
  )
}
