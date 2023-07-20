// o 'pai' dos tipos -> vem antes de any na hierarqueia de tipos
// seria um any mais 'seguro'

// o any permite mudar de tipos sem dar avisos
let x: any;
x = 10;
x = 'Vinicius';
x = true;
x = 90;
const y = 10;
console.log(x + y);

// já o unknown da um aviso
let a: unknown;
a = 10;
a = 'Vinicius';
a = true;
a = 90;
const b = 10;
console.log(a + b); // funciona do mesmo jeito, apenas da um aviso

// é possivel fazer uma checagem
if (typeof a === 'number') console.log(a + b);

export default 1;
