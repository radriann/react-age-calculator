/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: {
      'custom-purple': 'hsl(259, 100%, 65%)',
      'light-red': 'hsl(0, 100%, 67%)'
    },
    neutral: {
      'off-white': 'hsl(0, 0%, 94%)',
      'light-grey': 'hsl(0, 0%, 86%)',
      'smokey-grey': 'hsl(0, 1%, 44%)',
      'off-black': 'hsl(0, 0%, 8%)'
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  }
})
