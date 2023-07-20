/* eslint-disable */

// tipos básicos -> aqui ocorre inferencia de tipos
let nome: string = 'Luiz';
let idade: number = 0; // 10, 1.57, -5.5, 0xf00d, 0b1010, 0o7744
let adulto: boolean = false;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n; // es2020

// tipos que ja existem -> sempre letra minuscula
// quando criar tipos -> letra maiuscula

// 0xf00d -> hexadecimal
// 0b1010 -> binário
// 0o7744 -> octal

// --------------------------------------------
// Array
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b'];
// ou
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings2: string[] = ['a', 'b'];

// --------------------------------------------
// Objetos
// ? -> opcional
let person: {name: string, age: number, adult?: boolean} = {
  name: 'Vinicius',
  age: 20,
};

// --------------------------------------------
// Funções
function sum(x: number, y: number): number {
  return x + y;
}
// ou é possivel omitir o tipo do retorno
function sum2(x: number, y: number) {
  return x + y;
}
// ou então define os tipos de entrada e saída antes de informar os parâmetros
const sum3: (x: number, y: number) => number = (x, y) => x + y;

export default 1;
