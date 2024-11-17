import { colors } from "@/styles/colors"
import { TypographyProps } from "@mui/material"
import { Typography as MuiTypography } from "@mui/material"
import React from "react"

interface Props extends TypographyProps {
    colorType?: "plainText" | "introduce"
    isStrong?: boolean
}

export const H2Typography = ({
  colorType = "plainText",
  isStrong = false,
  children,
  ...others
}: Props) => {
    const fontColor = (colorType === "plainText") ? colors.text.primary : colors.primary.main
  return (
    <MuiTypography
      fontWeight={isStrong ? 700 : 400}
      fontSize={36}
      color={fontColor}
      {...others}
    >
      {children}
    </MuiTypography>
  )
}