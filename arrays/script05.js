var names = ['Odenilson', 'Bianca', 'Fred', 'Calebe']
console.log(names)

// usando o map com funçao de calback para retornar os valores em maiusculo, lembtrar que onde tem item poderia ser qualquer nome
var useMap = names.map(function(item) {
    return item.toUpperCase()
})
console.log(useMap)


// Multiplicando os valorees do array por 2
var numbers = [1, 2, 3, 4]
console.log(numbers)

var usermap2 = numbers.map(function(n) {
    return n * 2
}) 
console.log(usermap2)


// o metodo every retorna true caso TODOS os valores do array sejam maior do que 1, caso contrario retorna false
var result = numbers.every(function(x) {
    return x >= 1
})

console.log(result)


// o metodo some retorna true caso ALGUNS  Dos valores do array sejam maior do que 1, caso contrario retorna false
var result2 = numbers.some(function(Y) {
    return Y >= 10
})

console.log(result2)

//retornando a soma de todos os valores do array