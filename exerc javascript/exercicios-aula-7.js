// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490]
const numerosPares = numeros.filter(num => num % 2 == 0);
console.log(numerosPares);

// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]
const frutasQuatro = frutas.filter(fruta => fruta.length == 4);
console.log(frutasQuatro);

// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos']
const nomesM = nomes.map(item => item.charAt(0).toUpperCase() + item.slice(1))
console.log(nomesM);

// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]

const nomeSobrenome = nomesESobrenomes.map(item => item[0] + " " + item[1]);
console.log(nomeSobrenome);

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]

const soma = (acc, atual) => acc + atual;
const media = notas.reduce(soma, 0) / notas.length;

console.log(media);

// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]

const somapond = (acc, atual) => acc + atual[0];
const somapeso = (acc, atual) => acc + atual[1];
const mediapond = notasComPeso.reduce(somapond, 0) / notasComPeso.reduce(somapeso, 0);

console.log(mediapond);

// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.