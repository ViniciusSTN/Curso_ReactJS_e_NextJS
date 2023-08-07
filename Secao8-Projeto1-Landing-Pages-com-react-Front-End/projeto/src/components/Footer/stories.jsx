import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: `Vinicius Henrique Santana`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
