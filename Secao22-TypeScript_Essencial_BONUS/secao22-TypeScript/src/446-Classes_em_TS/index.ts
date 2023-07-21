// public: Pode ser acessado de dentro da classe e fora dela -> a palavra public é redundante, por padrão já é público
// private: Só pode ser acessado de dentro da classe em que foi definido.
// protected: Pode ser acessado de dentro da classe em que foi definido e suas subclasses.

export class Empresa {
  public readonly nome: string;
  // nesse caso o atributo é readonly, mas os valores dos indices não
  // para que o array seja readonly:
  // private readonly colaboradores: readonly Colaborador[] = [];
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// o tipo pode ser uma classe
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Vinicius', 'Santana');
const colaborador3 = new Colaborador('Ana', 'Silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();
