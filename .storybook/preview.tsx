import MockProviders from '../src/utils/mock-providers'
import { addParameters, addDecorator } from '@storybook/react'
import { Box } from '@mui/material'

addParameters({viewMode: 'docs'})

addDecorator((StoryFn, context) => context ? (
  <MockProviders>
    <Box p={3} >
      <StoryFn {...context}/>
    </Box>
  </MockProviders>
) : ( <StoryFn {...context}/>))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}