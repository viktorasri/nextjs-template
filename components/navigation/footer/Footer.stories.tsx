import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'navigation/footer',
  component: Footer,
  argTypes: {
    // More on Story argTypes: https://storybook.js.org/docs/react/api/argtypes
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps.base,
} as IFooter;
