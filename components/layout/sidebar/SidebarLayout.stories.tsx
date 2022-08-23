import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'layout/sidebar',
  component: SidebarLayout,
  argTypes: {
    // More on Story argTypes: https://storybook.js.org/docs/react/api/argtypes
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
