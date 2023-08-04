import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          voluptates molestias asperiores necessitatibus, autem nemo ab, fugiat,
          beatae possimus odio enim magnam assumenda mollitia provident et eaque
          similique exercitationem delectus?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
