//CODIGO AQUI

//* PRÁTICA DE OPERADORES DE ARITMÉTICA

saldo = 15
console.log('Saldo inicial',saldo)

saldo += 22.40
console.log('Soma de 22.40',saldo)

saldo -= 12.34
console.log('Subtração de 12.34',saldo)

saldo /= 3
console.log('Divisão por 3',saldo)

saldo *= 3.42
console.log('Multiplicação de 3.42',saldo)

saldo %= 3
console.log('Resto da divisão por 3',saldo)

//* PRÁTICA DE OPERADORES DE ARITMÉTICA - PRECEDÊNCIA MATEMÁTICA

const conta1 = 2*2+2
console.log("C1", conta1)

const conta2 = 2*(2+2)
console.log('C2',conta2)

//* OPERADORES RELACIONAIS

let r1 = 5 === 5
console.log("r1" , r1)

let r2 = 5 !== 5
console.log("r2" , r2)

let r3 = 5 !== '5'
console.log("r3" , r3)

let r4 = "5" === "cinco"
console.log("r4" , r4)

let r5 = typeof 5 === typeof 20
console.log("r5" , r5)

let r6 = typeof "5" === typeof "cinco"
console.log("r6" , r6)

//*MENOR E MAIOR (OU IGUAL)

let num1 = 10

let num2 = 20

console.log("O primeiro número é igual ao segundo?" , num1 === num2)

console.log("O primeiro número é menor ou igual ao segundo?" , num1 <= num2)

console.log("O primeiro número é maior que o segundo?" , num1 > num2)

console.log("O primeiro número é menor que o segundo?" , num1 < num2)

//* OPERADORES DE LÓGICA

const a= 'Quero dirigir um Celta 2012'

const b= 'Sou maior de idade'

const c= 'Consigo comprar o Celta por 22.000 reais'

const d= 'Consigo alugar o Celta'

const e= 'Tenho carteira de motorista'
