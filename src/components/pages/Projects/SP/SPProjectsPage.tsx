import { ProjectCard } from "@/components/atoms/ProjectCard"
import { Paper } from "@mui/material"

export const SPProjectsPage = () => {
  return (
    <Paper elevation={0} sx={{ px: 2, pt: 2, pb: 6 }}>
      <ProjectCard isMobile />
    </Paper>
)
}
