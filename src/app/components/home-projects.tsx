import { varFade } from '@/components/animate'
import { Projects } from '@/types/project.type'
import ProjectsItem from '@/components/projects/projects-item'
import SectionContainer from '@/app/components/section-container'

import Box from '@mui/material/Box'

const PROJECTS: Projects = [
  {
    title: 'Brain Anomaly Detection',
    description:
      "As a participant in a Kaggle competition hosted by my university's Artificial Intelligence course, I successfully created a binary classification model designed to identify brain anomalies within CT scans. This model helped me obtain the 8th place out of 128 students.",
    github_link: 'https://github.com/hutanmihai/ML-Brain-Anomaly-Detection',
    live_demo_link: null,
    youtube_link: null,
    technologies: ['python', 'tensorflow', 'numpy', 'pandas-wordmark', 'matplotlib', 'anaconda'],
  },
  {
    title: 'Calorie Tracker Backend',
    description:
      'Developed the backend infrastructure for a React Native application, specializing in a calorie tracking feature similar to a simplified version of MyFitnessPal. Demonstrated a commitment to adhering to industry best practices in code quality and architecture. Notably, this project marked my inaugural endeavor in constructing a backend architecture from the ground up.',
    github_link: 'https://github.com/hutanmihai/calorie-tracker-backend',
    live_demo_link: null,
    youtube_link: null,
    technologies: [
      'python',
      'fastapi',
      'sqlalchemy',
      'postgresql',
      'docker',
      'github-actions',
      'pytest-wordmark',
      'poetry',
    ],
  },
]

export default function HomeProjects() {
  return (
    <SectionContainer id="projects" variants={varFade().in} title="Projects">
      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectsItem project={project} key={index} />
        ))}
      </Box>
    </SectionContainer>
  )
}
