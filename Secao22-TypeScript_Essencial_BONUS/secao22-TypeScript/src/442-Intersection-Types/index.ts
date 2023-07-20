// & -> and/intersecção

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// nesse caso todos atributos serão opcionais, mas é preciso ter pelo menos um
type Pessoa = TemNome | TemSobrenome | TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Vinicius',
};

console.log(pessoa);

// --------------------------------------------------------------------------
// para que o objeto tenha que ter os 3 atributos necessáriamente:
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa2: Pessoa2 = {
  idade: 30,
  nome: 'Vinicius',
  sobrenome: 'Santana',
};

console.log(pessoa2);
// --------------------------------------------------------------------------

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC; // a interseção é o 'A'

// Module mode
export default 1;
