import { Base } from '.';

import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import mock from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
      </>
    ),
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
