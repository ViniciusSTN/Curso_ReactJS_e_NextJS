// void -> função que não retorna nada
// por padrão retorna undefined no JS

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}
noReturn('Vinicius', 'Santana');

export const person = {
  name: 'Vinicius',
  lastName: 'Santana',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

person.showName();

export default 1;
