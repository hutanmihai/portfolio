import { ElementType } from 'react'

import Link from '@mui/material/Link'
import Box, { BoxProps } from '@mui/material/Box'

export interface LogoProps extends BoxProps {
  disabledLink?: boolean
}

interface BoxOptions {
  alt?: string
}

const MuiBox = <C extends ElementType>(props: BoxProps<C, { component?: C }> & BoxOptions) => {
  return <Box {...props}>{props.children}</Box>
}

export default function Logo() {
  const logo = (
    <MuiBox
      component="img"
      src="/logo/logo_single.svg"
      sx={{ width: 40, height: 40, cursor: 'pointer' }}
      alt="logo"
    />
  )

  return (
    <Link href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  )
}
