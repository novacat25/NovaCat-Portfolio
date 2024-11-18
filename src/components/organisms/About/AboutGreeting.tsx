import { H3Typography, Subtitle1Typography, Subtitle2Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { H4Typography, P3Typography } from "@/components/atoms/Typography"
import { Stack } from "@mui/material"

type Props = {
    isMobile?: boolean
}

export const AboutGreeting = ({ isMobile = false }: Props) => {
    const PC = () => (
        <>
            <Subtitle1Typography colorType="introduce">Hello!<br />My Name is NovaCat.</Subtitle1Typography>
            <Subtitle2Typography color={colors.primary.secondary}>Web Engineer・Developer</Subtitle2Typography>
            <H3Typography color={colors.primary.secondary}>FrontEnd Engineer・UI/UX enthusiast</H3Typography>
        </>
    )
    const SP = () => (
        <Stack alignItems="center" pt={2.5}>
            <H4Typography isStrong colorType="introduce" textAlign="center">Hello!<br />My Name is NovaCat.</H4Typography>
            <P3Typography color={colors.primary.secondary}>Web Engineer・Developer</P3Typography>
        </Stack>
    )

  return (
    isMobile ? <SP /> : <PC />
  )
}
