// ts usa tipagem estruturada
// para o ts a identidade do tipo não importa, somente as restrições daquele tipo

// não necessáriamente o tipo precisa ser User, apenas as 'regras' devem ser compatíveis com o tipo User, nesse caso deve ser objetos que contém as chaves username e password como strings
type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'João', password: '123321' };
const sentUser = { username: 'João', password: '123321', permissions: '' };

// nesse caso a unica coisa que importa para 'bater' os dados ao executar a função são os valores dos atributos enviados como parâmetro e não o tipo do objeto em si
// pois os objetos bdUser e sentUser não são do tipo User, mas suas chaves estão de acordo com a tipagem necessária para executar a função verifyUser
// em resumo: o TS se preocupa com o conteúdo dos types e não com o nome do Type
// diferente de linguagens fortemente tipadas, como java

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
