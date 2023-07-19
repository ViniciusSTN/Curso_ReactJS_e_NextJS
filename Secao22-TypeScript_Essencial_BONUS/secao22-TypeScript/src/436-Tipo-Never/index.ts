// Nunca retorna -> ex: laço infiito ou erro

// nesse caso também da pra ser do tipo void, pois não retorna nada
function criaErro(): never {
  throw new Error('Erro qualquer');
}
criaErro();
