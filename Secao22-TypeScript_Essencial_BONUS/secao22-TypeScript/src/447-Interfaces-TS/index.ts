// geralmente interfaces e type alias é a mesma coisa
// geralmente interfaces são usadas com objetos

// -----------------------------------------------------------------------------
// usando type alias:

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());

// -----------------------------------------------------------------------------
// usando interface -> 'moldes' de objetos

interface TipoNome2 {
  nome: string;
}

interface TipoSobrenome2 {
  sobrenome: string;
}

interface TipoNomeCompleto2 {
  nomeCompleto: () => string;
}

interface TipoPessoa2 extends TipoNome2, TipoSobrenome2, TipoNomeCompleto2 {}

export class Pessoa2 implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa2 = new Pessoa2('Luiz', 'Miranda');
console.log(pessoa2.nomeCompleto());

// module mode
export default 1;
