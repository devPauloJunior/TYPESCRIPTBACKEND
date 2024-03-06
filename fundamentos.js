"use strict";
// TIPO NUMBER
let numero = 2;
numero = 23;
// TIPO STRING
let palavra = 'Paulo';
palavra = 'casa';
// TIPO BOOLEAN
let verdade = true;
let falso = false;
falso = true;
verdade = false;
// ANNOTATION e INFERENCE
let minhaVariavel = 'Texto'; //ANNOTATION
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //INFERENCE
minhaVariavel = 'Junior';
meuArray.push(10);
let multiploArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
multiploArray.push(10);
let num = [1, 3, 5, 7];
let letras = ['a', 'b', 'c'];
let misto = ['a', 1, 'c', true];
const nomes = ['João', 'Maria', 'Eduardo'];
const numerosPares = [2, 4, 6, 8, 10];
const mistoVariavel = [2, 'Paulo', false];
function minhasLetras(a, b) {
    console.log(a, b);
}
minhasLetras('p', 'a');
function soma(x, y) {
    let somar = x + y;
    return somar;
}
function coordenadas(cord) {
    console.log(`A coordenada X é: ${cord.x}`);
    console.log(`A coordenada Y é: ${cord.y}`);
}
const minhaCoordenada = { x: 718, y: 115.6 };
coordenadas(minhaCoordenada);
function mostreNumeros(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`C: ${c}`);
}
mostreNumeros(1, 2, 3);
mostreNumeros(4, 5);
function validaOpcao(opcao1, opcao2) {
    console.log(opcao1, opcao2);
}
validaOpcao('Paulo', true);
validaOpcao(23, 24);
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(15);
showId('15');
function showCpf(cpf) {
    console.log(`O CPF é: ${cpf}`);
}
showCpf(12345678910);
showCpf('123.456.789.-10');
function userDetails(user) {
    console.log(`Nome: ${user.tipo}`);
    console.log(`Idade: ${user.valor}`);
}
userDetails({ tipo: 'Paulo', valor: 26 });
function showCoords(myObject) {
    console.log(`x = ${myObject.x}, y = ${myObject.y} e z = ${myObject.z} `);
}
let minhasCoordenadas = {
    x: 10,
    y: 15,
    z: 28,
};
showCoords(minhasCoordenadas);
function showPet(meuPet) {
    console.log(meuPet.nome);
    console.log(meuPet.raca);
    console.log(meuPet.idade);
    console.log(meuPet.peso);
}
const gatinhoDaAlice = {
    nome: 'Floki',
    peso: 4,
    raca: 'Gatinho',
    idade: 32,
    tipoRacao: 'Premier para gatos castrados'
};
showPet(gatinhoDaAlice);
// FUNÇÃO SEM RETORNO
function semRetorno() {
    console.log('Sou sem retorno!');
}
semRetorno();
// LITERAL TYPES
let teste;
teste = 'gerente';
// TYPE UNKNOW
function algumaCoisa(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
algumaCoisa('10');
algumaCoisa(true);
