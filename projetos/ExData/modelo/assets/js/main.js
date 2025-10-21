function DiaSemana (diaSemana){
    switch (diaSemana){
    case 0:
    return 'Domingo'
    case 1:
    return 'Segunda - feira'
    case 2:
    return 'Terça - feira'
    case 3:
    return 'Quarta - feira'
    case 4:
    return 'Quinta - feira'
    case 5:
    return 'Sexta - feira'
    case 6:
    return 'Sabado'
}
}

function SuaData (){
    const data = new Date()
    const dataTexto = document.querySelector('#dataTexto')

    const diaSemana = data.getDay()

    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    dataTexto.innerHTML = `${DiaSemana(diaSemana)}, ${data.toLocaleDateString('pt-BR')} as ${hora}:${minutos}:${segundos}`
}

SuaData()