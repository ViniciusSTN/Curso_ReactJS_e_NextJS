import { GridTwoColumns } from '.';

import argsMock from './argsMock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: argsMock,
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
