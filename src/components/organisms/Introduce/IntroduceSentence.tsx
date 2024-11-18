import { TitleTypography, Subtitle2Typography, H3Typography } from "@/components/atoms/Typography"


type Props = {
    isMobile?: boolean
}

export const IntroduceSentence = ({ isMobile = false }: Props) => {
  return (
    <>
        <TitleTypography colorType="introduce" isMobile={isMobile}>I'm NovaCat.</TitleTypography>
        {isMobile ? (<H3Typography mt={-1} colorType="introduce">Web Engineer・Developer</H3Typography>) : (<Subtitle2Typography mt={-3} colorType="introduce">Web Engineer・Developer</Subtitle2Typography>)}
    </>
  )
}
