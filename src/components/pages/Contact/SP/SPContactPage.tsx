import { H1Typography, H4Typography } from "@/components/atoms/Typography"
import { colors } from "@/styles/colors"
import { Send } from "@mui/icons-material"
import { Button, Paper, Stack, TextField } from "@mui/material"

// TODO: Refactor & Design
export const SPContactPage = () => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: colors.background.main, px: 2, py: 2, pb: 6 }}>
      <H4Typography fontWeight="bold" color={colors.primary.secondary}>Contact Me</H4Typography>
      <Stack>
        <H1Typography fontWeight="bold" color={colors.primary.secondary}>Contact Me</H1Typography>
        <Stack sx={{ '& .MuiTextField-root': { my: 1 } }}>
          <TextField id="mail-title" label="Title" variant="outlined" sx={{ width: "50%", backgroundColor: colors.mono.white }} />
          <TextField id="mail-content" label="Content" variant="outlined" multiline rows={16} sx={{ pb:1, width: "80%", backgroundColor: colors.mono.white }} />
          <Button startIcon={<Send />} variant="contained" sx={{ textTransform: "none", borderRadius: 12, py: 1.5, px: 2, width: '35%'}}>Send</Button>
        </Stack>
      </Stack>
    </Paper>
)
}
