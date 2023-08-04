import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          doloremque inventore eligendi doloribus, delectus quia ducimus quod
          nisi nemo eos perferendis facere aliquam obcaecati pariatur, libero
          hic rem nulla magni.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
