// função recursiva

var number = 10

function recursiva(n){
    console.log(n)

    if(n > 0){
       return recursiva(n - 1)
    }
}

recursiva(number)