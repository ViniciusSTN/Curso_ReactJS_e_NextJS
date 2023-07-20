// generic  /  type
// Array<T> ou T[]

function mult(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}
const result = mult(1, 2, 3);
console.log(result);

// -------------------------------------------------
function concat(...args: Array<string>): string {
  return args.reduce((acc, value) => acc + value);
}
const result2 = concat('1', '2', '3');
console.log(result2);

// -------------------------------------------------
function uCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}
const result3 = uCase('a', 'b', 'c');
console.log(result3);

export default 1;
