import { Paper } from "@mui/material"
import Box from '@mui/material/Box'
import { ProjectCard } from "@/components/atoms/ProjectCard"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export const PCProjectsPage = () => {
  return (
    <Paper elevation={0} sx={{ pt: 7.5 , px: 15, pb: 20 }}>
      <ProjectCard />
    </Paper>
    )
}
