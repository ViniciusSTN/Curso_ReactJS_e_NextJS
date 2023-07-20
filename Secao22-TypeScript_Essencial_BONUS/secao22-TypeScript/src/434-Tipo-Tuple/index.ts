// n tem no JS
// array com tipo específico e tipos diferentees de dados

const clientData1: [number, string, string?] = [1, 'Vinicius']; // indice 2 é opcional
clientData1[0] = 100;
clientData1[1] = 'Joao';
clientData1[2] = 'Silva';

// como não existe indice 3 no array, daria um erro. Mas com métodos de array como push não daria esse erro -> isso pode ser um problema
clientData1[3] = 'Santana';
console.log(clientData1);

// daria pra resolver esse problema com readonly, mas não será mais possível alterar os valores depois
const clientData2: readonly [number, string, string?] = [1, 'Vinicius'];

console.log(clientData2);

// ---------------------------------------------------------------------
// usando rest

// nesse caso não limita a quantidade de indices do array, mas todos que forem atribuidos com operado rest precisam ser do tipo string nesse caso
const clientData3: [number, string, ...string[]] = [
  1,
  'Vinicius',
  'sla',
  'sla2',
  'sla3',
];
console.log(clientData3);

// ---------------------------------------------------------------------

// outras duas formas de declarar array
const array: readonly string[] = ['Vinicius', 'Santana'];
const array2: ReadonlyArray<string> = ['Vinicius', 'Santana'];
console.log(array, array2);

export default 1;
