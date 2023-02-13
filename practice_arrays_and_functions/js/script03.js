
function exibeDivisoresDeUmNumeroInteiro(){

    let num = Number(document.querySelector('input#numero').value)
    let result = document.querySelector('div#resultado')
    let valores = []

    if(num != ''){
        for(let i = 1; i <= num; i++) {
            if(num % i == 0) {
                valores.push(i)
            }    
        }
        console.log(`o vetor valores possui ${valores.length} divisores, são eles ${valores.sort()}`)
        result.innerHTML = ''
        result.innerHTML += `o vetor valores possui <strong>${valores.length}</strong> divisores<br><br>`
        result.innerHTML += `são eles <strong>${valores.sort()}</strong>`
        result.style.background = '#ccc'

    }else{
        alert('por favor, informe um numero :)')
    }
    
}
