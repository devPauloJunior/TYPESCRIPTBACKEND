// TIPO NUMBER
let numero: number = 2
numero = 23

// TIPO STRING
let palavra: string = 'Paulo'
palavra = 'casa'

// TIPO BOOLEAN
let verdade: boolean = true
let falso: boolean = false

falso = true
verdade = false

let num: number[] = [1, 3, 5, 7]
let letras: string[] = ['a', 'b', 'c']
let misto: any[] = ['a', 1, 'c', true]

const nomes: Array<string> = ['João', 'Maria', 'Eduardo']
const numerosPares: Array<number> = [2, 4, 6, 8, 10]
const mistoVariavel: Array<any> = [2, 'Paulo', false]

function minhasLetras(a:string, b:string) {
    console.log(a, b)
}

minhasLetras('p', 'a')


function soma(x: number, y:number):number {
    let somar: number = x + y
    return somar
}

function coordenadas(cord: {x: number, y: number}) {
    console.log(`A coordenada X é: ${cord.x}`)
    console.log(`A coordenada Y é: ${cord.y}`)
}

const minhaCoordenada = {x: 329, y:72.6}
coordenadas(minhaCoordenada)

function mostreNumeros (a: number, b: number, c?: number) {
    console.log(`A: ${a}`)
    console.log(`B: ${b}`)
    console.log(`C: ${c}`)
}

mostreNumeros(1,2,3)
mostreNumeros(4,5)

function validaOpcao(opcao1: string | number, opcao2: number | boolean) {
    console.log(opcao1, opcao2)
}

validaOpcao('Paulo', true)
validaOpcao(23, 24)
