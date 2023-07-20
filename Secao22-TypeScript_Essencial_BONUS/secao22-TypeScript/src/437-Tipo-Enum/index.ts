// estrutura de dados para enumerar
// pode ser tanto numeros ou strings

// por padrão os valores começam com 0, mas pode alterar
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  ROXO = 'Uma String',
  // VERDE, // Daria um erro, pois o ts não sabe qual a sequencia, pois o valor anterior é string
  MARROM = 30,
}

// console.log(Cores);
// console.log(Cores[1]);
// console.log(Cores[3]); // undefined -> pois não existe

// -----------------------------------------------------------------
// é possivel unir dois enum
// Observe que já existe Cores
enum Cores {
  PRETO = 50, // 0
  ROSA = 1, // como o AZUL já tinha o valor 1, irá substitui-lo
  CINZA = 20, // irá ficar antes de MARROM, para seguir uma ordem crescente
}

// console.log(Cores);

// -----------------------------------------------------------------
// forçando a começar com valor 1
enum Cores2 {
  VERMELHO = 1, // 1
  AZUL, // 2
  AMARELO, // 3
}

// console.log(Cores2);

// -----------------------------------------------------------------
// atribuindo valores manualmente
enum Cores3 {
  VERMELHO = 100, // 100
  AZUL = 200, // 200
  AMARELO = 500, // 500
  PRETO, // 501 -> como não foi definido um valor, ele será 500 + 1
}

// console.log(Cores3);

// -----------------------------------------------------------------
// exemplo de uso
function chooseColor(color: Cores3): void {
  console.log(Cores3[color]);
}
chooseColor(Cores3.VERMELHO);
chooseColor(123123); // undefined -> o ideal era retornar um erro por segurança
