sexo = 'Masculino'
idade = 17

if(sexo === 'Feminino'){
    console.log(`Desconto de <strong>50%</strong>, você é do sexo <strong>${sexo}</strong>`)
}
else if(sexo === 'Masculino' && idade >=18 ){
    console.log(`Desconto de <strong>40%</strong>, você é do sexo <strong>${sexo} e tem ${idade} anos</strong>`)
}
else{
    console.log(`Desconto de <strong>45%</strong>, você é do sexo <strong>${sexo} e tem ${idade}</strong>`)
}