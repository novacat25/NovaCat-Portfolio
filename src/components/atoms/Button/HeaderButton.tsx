import { colors } from "@/styles/colors"
import { PageCategory } from "@/types/page_category"
import { Button as MButton, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

type Props = {
  toPage: PageCategory
}

export const HeaderButton = ({ toPage }: Props) => {
  const router = useRouter()

  const handleClick = (page: PageCategory) => {
    router.push(`${page.toLowerCase()}`)
  }

  return (
    <MButton
      color="inherit"
      onClick={()=>handleClick(toPage)}
      sx={{
        textTransform: "none",
      }}
    >
      <Typography sx={{ color: colors.header.main }}>{toPage}</Typography>
    </MButton>
  )
}
