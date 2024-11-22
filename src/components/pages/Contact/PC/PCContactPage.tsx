import { H1Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Send } from "@mui/icons-material"
import { Button, Paper, Stack, TextField } from "@mui/material"

export const PCContactPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, pt: 2, pl: 7, pb: 20 }}>
      <H1Typography fontWeight="bold" color={colors.primary.secondary}>Contact Me</H1Typography>
      <Stack sx={{ '& .MuiTextField-root': { my: 1, width: '25ch' } }}>
        <TextField id="mail-title" label="Title" variant="outlined" sx={{ backgroundColor: colors.mono.white }} />
        <TextField id="mail-content" label="Content" variant="outlined" multiline maxRows={5} sx={{ backgroundColor: colors.mono.white }} />
        <Button startIcon={<Send />} variant="contained" sx={{ borderRadius: 12, py: 1.5, px: 2, width: '8%'}}>Send</Button>
      </Stack>
    </Paper>
  )
}
