// usar valores como tipos

// eslint-disable-next-line
let x = 10; // tipo: number -> pois foi declarado como let
x = 0b1010;

const y = 10; // subtipo de number: 10 -> tipo literal -> pois é constante
// para ver isso melhor basta passar o mouse em cima e ver o tipo que está sendo inferido

// ----------------------------------------------------------------------

// para atribuir um tipo literal usando let:
// OBS: não é recomendável
let a: 100 = 100; // eslint-disable-line @typescript-eslint/prefer-as-const
a = 200; // -> gera um errro pois 'a' só pode ser do tipo 100

// ou então (melhor usar assim)
let b = 100 as const; // eslint-disable-line prefer-const
// em alguns casos pode ser útil

// exemplo de uso:
const pessoa = {
  nome: 'Vinicius' as const, // o tipo inferido agora é 'Vinicius'
  sobrenome: 'Santana',
};
pessoa.nome = 'Joao'; // gera um erro por conta do tipo

// ----------------------------------------------------------------------
// outro caso muito util
// nesse caso os tipos devem ser string com subtipo Vermelho ou Amarelo ou Azul
// obs: não confundir com valor, pois isso é tipo literal
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
const color = 'Azul';
console.log(escolhaCor(color));

// module mode
export default 1;
