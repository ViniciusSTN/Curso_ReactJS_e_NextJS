import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod porro minus similique, soluta nam doloribus, aliquid ab quo culpa ut illum deleniti veritatis deserunt odio doloremque, molestiae atque nobis.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
