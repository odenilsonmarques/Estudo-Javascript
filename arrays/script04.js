//buscando a posição da chave de um determinado valor.Quano um valor não é encontrado é atribuido a ele o valor -1

let num = [2,4,5,3]

let pos = num.indexOf(2)

if(pos == -1) {
    console.log(`valor não encontrado !`)
}else{
    console.log(`o valor 2 está na posição ${pos}`)
}
