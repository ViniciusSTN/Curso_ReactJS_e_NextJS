// O MÉTODO MAIS RECOMENDADO:
const objA = {
  keyA: 'ValorA',
  keyB: 'ValorB',
};
objA.keyA = 'NovoA';

// Da erro pois essa chave não existe
objA.keyC = 'ValorC';

// -------------------------------------
// existe uma forma de resolver isso:
// mas não é recomendado, pois o vsCode não recomendará esses atributos como é normalmente
const objB: Record<string, unknown> = {
  keyA: 'ValorA',
  keyB: 'ValorB',
};
objB.keyC = 'ValorC';

// -------------------------------------
// é possível tipar as chaves:
const objC: {
  keyA: string;
  keyB: string;
  keyC?: string; // ? -> opcional
  [key: string]: unknown; // para receber outras chaves que ainda não existem (igual ao objB)
} = {
  keyA: 'ValorA',
  keyB: 'ValorB',
};

objC.keyC = 'valorC';

// -------------------------------------
// para nunca alterar o valor da chave, apenas ler:
const objD: {
  readonly keyA: string;
  readonly keyB: string;
} = {
  keyA: 'ValorA',
  keyB: 'ValorB',
};

// não será possível atribuir outros valores
objD.keyA = 'Sla';

export default 1;
