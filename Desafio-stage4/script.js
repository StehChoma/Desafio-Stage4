alert("Insira dois números")
let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne);
numberTwo = Number (numberTwo);
let sumNumber = Number (numberOne) + Number(numberTwo)
alert("Soma é igual a: " + sumNumber)

if (Number (numberOne) == Number(numberTwo)) {
  alert("Você digitou numeros iguais")
} 
if ((sumNumber % 2) == 0) { 
  alert("A soma é um número par")
} if ((sumNumber % 2) != 0) {
  alert("A soma é um número ímpar")
} 

let subNumber = Number (numberOne) - Number (numberTwo)
alert("A subtração é igual a: " + subNumber)

let multiNumber = (Number (numberOne) * Number (numberTwo))
alert("Multiplicação é igual a: " + multiNumber)

let divNumber = Number (numberOne) / Number (numberTwo)
alert("Divisão é igual a: " + divNumber)

let restDiv = Number (numberOne) % Number (numberTwo)
alert("Resto da divisão é igual a: " + restDiv)


