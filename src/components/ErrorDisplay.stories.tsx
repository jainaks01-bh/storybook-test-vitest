import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { ErrorDisplay } from './ErrorDisplay';

const meta = {
  title: 'Error Message',
  component: ErrorDisplay,
} as Meta<typeof ErrorDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorDisplayStory: Story = {
  name: 'Error Display',
  args: {
    inline: true,
    title: 'Fetching API return 404: Not Found',
    errors: [
      {
        message: 'Not Found',
        code: 404,
      },
    ],
  },
  play: ({ canvasElement, args }) => {
    const screen = within(canvasElement);
    expect(screen.queryByTestId('error-display-inline')).toBeInTheDocument();
    expect(screen.queryByText(args.title ?? '')).toBeInTheDocument();
  },
};

export const ZeroErrorDisplayStory: Story = {
  name: 'Zero Errors',
  args: {
    inline: false,
    title: 'No Error',
  },
  play: ({ canvasElement, args }) => {
    const screen = within(canvasElement);
    expect(screen.queryByTestId('error-display-block')).toBeInTheDocument();
    expect(screen.queryByTestId('error-display-list')).not.toBeInTheDocument();
    expect(screen.queryByText(args.title ?? '')).toBeInTheDocument();
  },
};

export const BlockErrorDisplayStory: Story = {
  name: 'Block Error Display',
  args: {
    inline: false,
    errors: [
      {
        code: 500,
        message: 'Internal Server Error',
      },
    ],
  },
  play: ({ canvasElement, args }) => {
    const screen = within(canvasElement);
    expect(screen.queryByTestId('error-display-block')).toBeInTheDocument();
    expect(screen.queryByTestId('error-display-list')).toBeInTheDocument();
    expect(screen.queryByText(args.errors ? args.errors[0].message : '')).toBeInTheDocument();
  },
};

export const NoErrorDisplayStory: Story = {
  name: 'No Error Display',

  play: ({ canvasElement }) => {
    const screen = within(canvasElement);
    expect(screen.queryByTestId('error-display-inline')).not.toBeInTheDocument();
  },
};
