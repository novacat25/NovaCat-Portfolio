import { colors } from "@/styles/colors"
import { Button as MButton, Typography } from "@mui/material"

type Props = {
  toPage?: "About" | "Experiences" | "Projects" | "Blog" | "History" | "Contact"
}

export const HeaderButton = ({ toPage }: Props) => {
  return (
    <MButton
      color="inherit"
      href={`${toPage?.toLowerCase()}`}
      sx={{
        textTransform: "none",
      }}
    >
      <Typography sx={{ color: colors.header.main }}>{toPage}</Typography>
    </MButton>
  )
}
