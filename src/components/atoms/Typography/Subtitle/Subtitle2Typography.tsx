import { colors } from "@/styles/colors"
import { TypographyProps } from "@mui/material"
import { Typography as MuiTypography } from "@mui/material"
import React from "react"

interface Props extends TypographyProps {
    colorType?: "plainText" | "introduce" 
}

export const Subtitle2Typography = ({
  colorType = "plainText",
  children,
  ...others
}: Props) => {
    const fontColor = (colorType === "plainText") ? colors.text.primary : colors.primary.main
  return (
    <MuiTypography
      fontSize={36}
      color={fontColor}
      {...others}
    >
      {children}
    </MuiTypography>
  )
}