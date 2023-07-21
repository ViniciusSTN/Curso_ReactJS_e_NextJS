// converter de um tipo para outro

const body = document.querySelector('body'); // HTMLBodyElement | null

body.style.background = 'red'; // ocasiona um erro porque o body pode ser null

// condicional
if (body) body.style.background = 'red'; // RECOMENDADO

// ---------------------------------------------------

// non-null assertion (!)
// mas se tiver certeza que o body existe:
const body2 = document.querySelector('body')!; // não é recomendado

// ---------------------------------------------------

// type assertion
// se tiver certeza que existe
const body3 = document.querySelector('body') as HTMLBodyElement; // RECOMENDADO

// ---------------------------------------------------

// se por algum motivo precisar atribuir um tipo que não faz parte:
const body4 = document.querySelector('body') as unknown as number;
// é preciso subir o tipo para unknown para evitar erros
// nesse caso o body4 agora é do tipo number
// não é recomendável

// module mode
export default 1;
