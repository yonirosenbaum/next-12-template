import { Box, Typography } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SkipLink, { SkipLinkProps } from 'src/components/SkipLink'

export default {
  title: 'Navigation/SkipLink',
  component: SkipLink,
} as ComponentMeta<typeof SkipLink>

const Template: ComponentStory<typeof SkipLink> = (args: SkipLinkProps) => (
  <div>
    <SkipLink {...args} />
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      bgcolor="background.dark"
      color="text.contrast"
      mb={3}
      p={3}
      id="content"
    >
      <Typography variant="body1">Main content to skip to</Typography>
    </Box>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  href: '#content',
  children: 'Skip to main content',
}
