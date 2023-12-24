import { bgBlur } from '@/theme/css'
import NavMobile from '@/layouts/nav/mobile'
import NavDesktop from '@/layouts/nav/desktop'
import NavLeftSide from '@/layouts/nav/left-side'
import { HEADER } from '@/layouts/nav/config-layout'
import { useOffSetTop } from '@/hooks/use-off-set-top'
import { useResponsive } from '@/hooks/use-responsive'
import { navConfig } from '@/layouts/nav/config-navigation'
import ResumeButton from '@/components/buttons/resume-button'
import ThemeModeButton from '@/components/buttons/theme-mode-button'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import { Container } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'

export default function Navbar() {
  const theme = useTheme()

  const mdUp = useResponsive('up', 'md')

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP)

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <NavLeftSide />
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            alignItems="center"
            direction={{ xs: 'row', md: 'row-reverse' }}
            spacing={{ xs: 0, sm: 1 }}
          >
            <ResumeButton />
            <ThemeModeButton />
            {mdUp && <NavDesktop data={navConfig} />}
            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
