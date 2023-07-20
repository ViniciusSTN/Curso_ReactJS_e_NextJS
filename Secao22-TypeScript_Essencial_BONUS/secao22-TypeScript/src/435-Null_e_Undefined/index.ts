// Undefined

let x;
console.log(x); // undefined

function createPerson(
  // parâmetros
  firstName: string,
  lastName?: string,
): {
  // tipagem do retorno
  firstName: string;
  lastName?: string;
} {
  // corpo da função
  return {
    firstName,
    lastName,
  };
}

// quando o parâmetro é opicional -> retorna undefined
console.log(createPerson('Vinicius')); // { firstName: 'Vinicius', lastName: undefined }

// ------------------------------------------------------------
// Null

// é mais comum retorar/checar null em códigos:
function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
console.log(squareOf('2')); // null
console.log(squareOf(2)); // 4

export default 1;
