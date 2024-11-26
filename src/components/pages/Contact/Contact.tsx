import { useMediaQuery, useTheme } from "@mui/material"
import { PCContactPage, SPContactPage } from "@/components/pages/Contact"

export const ContactPage = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))

return isPC? <PCContactPage /> : <SPContactPage />
}
