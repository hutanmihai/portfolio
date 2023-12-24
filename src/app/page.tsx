import MainLayout from '@/layouts/main-layout'
import HomeHero from '@/app/components/home-hero'
import HomeSkills from '@/app/components/home-skills'
import HomeAboutMe from '@/app/components/home-about-me'
import HomeProjects from '@/app/components/home-projects'
import HomeEducation from '@/app/components/home-education'
import HomeExperience from '@/app/components/home-experience'

import Box from '@mui/material/Box'

export default function Home() {
  return (
    <MainLayout>
      <HomeHero />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeAboutMe />
        <HomeProjects />
        <HomeSkills />
        <HomeExperience />
        <HomeEducation />
      </Box>
    </MainLayout>
  )
}
