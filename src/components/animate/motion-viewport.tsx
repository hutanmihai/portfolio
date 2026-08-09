import { m, MotionProps } from 'framer-motion'
import { useResponsive } from '@/hooks/use-responsive'

import Box, { BoxProps } from '@mui/material/Box'

import { varContainer } from './variants'

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps

interface Props extends IProps {
  children: React.ReactNode
  disableAnimatedMobile?: boolean
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const smDown = useResponsive('down', 'sm')

  if (smDown && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      // 'some' rather than a ratio: sections taller than the viewport can never
      // satisfy a percentage threshold, and would stay stuck at opacity 0.
      viewport={{ once: true, amount: 'some' }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  )
}
