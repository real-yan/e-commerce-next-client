import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withNextRouter } from 'storybook-addon-next-router'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
