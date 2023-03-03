var names = ['Odenilson', 'Bianca', 'Fred', 'Calebe']
console.log(names)

// usando o map com funccao de calback paara retornar os valores em maiusculo, lembtrar que onde tem item poderia ser qualquer nome
var useMap = names.map(function(item) {
    return item.toUpperCase()
})
console.log(useMap)

////////////////////////////////////////////////////////////////////////////////////////////////

var numbers = [1, 2, 3, 4]
console.log(numbers)

var usermap2 = numbers.map(function(n) {
    return n * 2
}) 
console.log(usermap2)