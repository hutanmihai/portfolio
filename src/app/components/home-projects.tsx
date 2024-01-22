'use client'

import Iconify from '@/components/iconify'
import { varFade } from '@/components/animate'
import SectionContainer from '@/app/components/section-container'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const PROJECTS = [
  {
    title: 'The Flinstones - Facial detection & recognition',
    description:
      'Implemented a facial detection and recognition system for characters in "The Flinstones" using a sliding window approach and Convolutional Neural Networks (CNNs). The project involved patch extraction, binary and multi-class classification, and sliding window techniques.',
    live_demo_link: null,
    youtube_link: null,
    github_link: 'https://github.com/hutanmihai/flinstones-facial-detection-recognition',
    technologies: ['python', 'pytorch', 'numpy', 'matplotlib', 'opencv-wordmark', 'anaconda'],
  },
  {
    title: 'Reinforcement Learning - Atari Skiing',
    description:
      'Developed DQN and DDQN algorithms for OpenAI Gym Skiing environment. Showcased commitment to refining network architecture and preprocessing, addressing challenges in hyperparameter tuning. This project marked my initial venture into reinforcement learning implementations.',
    live_demo_link: null,
    youtube_link: null,
    github_link: 'https://github.com/hutanmihai/reinforcement-learning-skiing',
    technologies: ['python', 'pytorch', 'numpy', 'plotly', 'opencv-wordmark', 'anaconda'],
  },
  {
    title: 'Double Double Dominoes',
    description:
      'Implemented a computer vision system for automated dominoes game analysis. The project involves three main steps: board extraction, piece detection, and classification.\n' +
      'Board extraction includes HSV masking, preprocessing, edge detection, and contour identification.\n' +
      'Piece detection addresses challenges such as center text interference and misplacement.\n' +
      'Classification utilizes templates for both vertical and horizontal domino pieces, employing template matching with preprocessing for accurate results.\n' +
      'The final component, score calculation, involves dynamic programming considering player positions on the score board.',
    github_link: 'https://github.com/hutanmihai/Double-Double-Dominoes/blob/main/README.md',
    live_demo_link: null,
    youtube_link: null,
    technologies: ['python', 'opencv-wordmark', 'numpy', 'anaconda'],
  },
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
      'githubactions',
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
          <Card
            key={index}
            title={project.title}
            sx={{
              textAlign: 'center',
              bgcolor: 'background.default',
              p: (theme) => theme.spacing(10, 5),
              ...{
                boxShadow: (theme) => ({
                  md: `-40px 40px 80px ${
                    theme.palette.mode === 'light'
                      ? alpha(theme.palette.grey[500], 0.16)
                      : alpha(theme.palette.common.black, 0.4)
                  }`,
                }),
              },
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h4" component="p" mb={2}>
                {project.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} component="p">
                {project.description}
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" mb={4}>
                {project.github_link && (
                  <Button
                    color="inherit"
                    size="medium"
                    variant="contained"
                    endIcon={<Iconify icon="icon-park:github" />}
                    target="_blank"
                    rel="noopener"
                    href={project.github_link}
                  >
                    Github
                  </Button>
                )}
                {project.youtube_link && (
                  <Button
                    color="error"
                    size="medium"
                    variant="outlined"
                    endIcon={<Iconify icon="openmoji:youtube" />}
                    target="_blank"
                    rel="noopener"
                    href={project.youtube_link}
                  >
                    Youtube
                  </Button>
                )}
                {project.live_demo_link && (
                  <Button
                    color="primary"
                    size="medium"
                    variant="contained"
                    endIcon={<Iconify icon="carbon:demo" />}
                    target="_blank"
                    rel="noopener"
                    href={project.live_demo_link}
                  >
                    Live Demo
                  </Button>
                )}
              </Stack>
              {project.technologies.length > 0 && (
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  {project.technologies.map((technology) => (
                    <Iconify
                      key={technology}
                      icon={`devicon:${technology}`}
                      width={40}
                      height={40}
                      sx={{ mx: 'auto' }}
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          </Card>
        ))}
      </Box>
    </SectionContainer>
  )
}
