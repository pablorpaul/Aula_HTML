/* 
Aula de JavaScript
Conceitos básicos
*/

alert('Texto externo');

//Váriaveis
/*
Tipagem Dinâmica
var -- global
let -- escopo
*/
let nome = 'Marcelo'; //string
let nome1 = "Marcelo" + nome; //string
let nome2 = `Marcelo ${nome}`;


let opcao = true; //boolean
let peso = 80.5; //float
let idade = 47; //inteiro

let idades = [42, 36, 7 ,99]; //Array
console.log(idades);
let valores = [10, 'Marcelo', 5.55, true];
idades[99] = 'ultimo';
console.log(valores);

//objeto do HTML
let objeto = document.querySelectorAll('h1');
console.log(objeto[1].textContent);
objeto[1].textContent = 'Novo texto';

//funcoes
function soma(n1=2,n2=3){
    console.log(`Soma: ${n1+n2}`);
}

soma(8,10);
soma(10,12);
soma();

let valor1 = Number(prompt('Digite o valor 1: '));
let valor2 = Number(prompt('Digite o valor 2: '));
if(valor1 > valor2){
    console.log("Valor 1 é maior que o valor 2");
} else{
    console.log("Valor 2 é maior que o valor 1");
}
