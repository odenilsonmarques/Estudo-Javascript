

// Essa funcão tem como principal objetivo evitar que ao clicar no link esse seja direcionado, ou seja quebrando o comportamento padrão
function evitarDirecionamento(event)
{
    // mudando a cor da pagina ao clicar ao inves de redirecionar. Poderia fzer outras coisa, fica a cargo do interesse
    document.body.style.backgroundColor ='#666'


    // verificando se o navegador suporta esse elemento
    evt = event || window.event //IE

    // se existir essa propriedade(preventDefault), esta é chamada e pára o evento padrao de redirecoinamento
    if(evt.preventDefault) evt.preventDefault()

    //se passar pelo passo acima, vem para esse proximo passo
    if(evt.returnValue) evt.returnValue()

    return false
}