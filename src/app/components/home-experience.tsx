'use client'

import Image from 'next/image'
import { varFade } from '@/components/animate'
import { useResponsive } from '@/hooks/use-responsive'
import SectionContainer from '@/app/components/section-container'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineOppositeContent,
} from '@mui/lab'

const EXPERIENCES = [
  {
    title: 'Software Engineer',
    company: 'Arcanna.ai',
    location: 'Bucharest, Romania',
    date: 'Feb 2024 - Present',
    icon: '/assets/landing-page/experience/arcanna.svg',
    descriptions: [
      'Core contributor to introducing generative AI into the platform, building the software layer end to end with Google ADK, from an in-product assistant to agentic workflows, including both the framework for authoring them and the agents themselves.',
      'Deployed and managed self-hosted LLMs across on-premise and fully air-gapped client environments using vLLM and Docker, handling model selection, serving, and ongoing operation without external dependencies.',
      'Designed and implemented a retrieval-augmented generation (RAG) system from scratch, covering document ingestion with Docling through indexing, retrieval, and response generation on Elasticsearch.',
      "Co-led a full revamp of the application's frontend in TypeScript, React, and Material UI, significantly improving UI/UX and performance.",
      'Owned large features end to end across the stack (data pipelines, REST APIs, research, and prototyping), including work delivered on-site within client-restricted environments.',
    ],
    image: '/assets/landing-page/experience/arcanna.svg',
  },
  {
    title: 'Co-Owner & Software Engineer',
    company: 'iBac',
    location: 'Bucharest, Romania',
    date: 'May 2023 - Oct 2025',
    icon: '/assets/landing-page/experience/ibac.webp',
    descriptions: [
      'Co-Owner and Software Engineer of a top-rated educational app, achieving 5-star ratings on both Android and iOS platforms.',
      "Contributing to the app's success with 30,000+ monthly active users and over 250,000 accounts created.",
      'Achieved #1 rank in the Education category on both App Store and Google Play multiple times.',
      'Contributed to architectural decisions and feature brainstorming sessions, ensuring the delivery of a high quality product and new features.',
    ],
    image: '/assets/landing-page/experience/ibac.webp',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Capgemini Engineering',
    location: 'Cluj-Napoca, Cluj, Romania · Remote',
    date: 'Sep 2022 - May 2023',
    icon: '/assets/landing-page/experience/capgemini.webp',
    descriptions: [
      'Began my journey at Capgemini Engineering as an Intern and after two months I was promoted to the position of a Junior.',
      'Initiated and executed projects from inception, leveraging Docker for efficient containerization and establishing robust CI/CD Pipelines for both deployment and testing.',
      'Developed, documented and tested RESTful APIs to facilitate seamless collaboration with the frontend team.',
      'Proficiently processed and filtered substantial volumes of data received from data engineering teams, ensuring the delivery of comprehensible and industry-standard APIs.',
      'Contributed to projects utilizing a technology stack comprising Docker, FastAPI, Django, SQLAlchemy, Alembic, PostgreSQL, Poetry and Pytest.',
    ],
    image: '/assets/landing-page/experience/capgemini.webp',
  },
]

export default function HomeExperience() {
  const mdUp = useResponsive('up', 'md')

  return (
    <SectionContainer id="experience" variants={varFade().inLeft} title="Experience">
      <Timeline position="left">
        {EXPERIENCES.map((experience, index) => (
          <TimelineItem key={index}>
            {mdUp ? (
              <TimelineOppositeContent
                sx={{
                  flex: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={experience.image}
                  alt="hero"
                  width={500}
                  height={300}
                  style={{
                    marginRight: 20,
                    borderRadius: 10,
                  }}
                />
              </TimelineOppositeContent>
            ) : (
              <TimelineOppositeContent
                sx={{
                  flex: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            )}
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  backgroundImage: `url(${experience.icon})`,
                  backgroundSize: 'cover',
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom>
                  {experience.title}
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  {experience.company}, {experience.location}, {experience.date}
                </Typography>

                {experience.descriptions.map((description, index) => (
                  <Typography key={index} variant="body2" component="p" gutterBottom>
                    {description}
                  </Typography>
                ))}
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </SectionContainer>
  )
}
