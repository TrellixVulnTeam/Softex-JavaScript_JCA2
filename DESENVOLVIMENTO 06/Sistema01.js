var input = require('readline-sync')/*O require ajuda a facilitar quando há questões ou interação para o usuário responder. PARA IMPORTAR O REQUIRE é só colocar npm i 'readline-sync' no CMD*/

/* o JSON é aberto quando se utiiza o readline-sync*/

console.log ('Sistema para notas de alunos')

const notaA = Number(input.question('Digite sua primeira nota: '))
const notaB = Number(input.question('Digite sua segunda nota: '))
const notaC = Number(input.question('Digite sua terceira nota: '))
let resultadoFinal = '' /*essa variável tem que ser em let, pois, após o if vai ser incrementado um valor a ela. Se colocar const vai dar erro*/
const media = ((notaA + notaB + notaC) / 3)

if (media >=7){
    resultadoFinal = 'Você foi Aprovado'
}

else {
    resultadoFinal ='Você foi Reprovado'
}

console.clear() /*limpar a tela antes de mostrar o resultado*/

console.log('A sua média é: ' + media)
console.log(resultadoFinal)

/*vídeo como base: https://www.youtube.com/watch?v=DP9yPwhD9rA&t=72s*/