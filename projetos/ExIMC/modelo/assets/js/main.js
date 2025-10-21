function CalculoDeIMC(){
    const peso = document.querySelector('#Peso')
    const altura = document.querySelector('#Altura')
    const form = document.querySelector('.form')
    const resultado = document.querySelector('#ResultadoIMC')

    form.addEventListener('submit', function(event){
        event.preventDefault()

        let IMC = Number(peso.value) / Number(altura.value) ** 2
        IMC = IMC.toFixed(2)
        resultado.style.backgroundColor = 'aquamarine'

        if (IMC < 18.5){
            resultado.innerHTML += `<p>${IMC} = Abaixo do peso</p>`
        }else if (IMC >= 18.5 && IMC <= 24.9){
            resultado.innerHTML += `<p>${IMC} = Peso normal</p>`
        }else if (IMC >= 25 && IMC <= 29.9){
            resultado.innerHTML += `<p>${IMC} = Sobrepeso</p>`
        }else if (IMC >= 30 && IMC <= 34.9){
            resultado.innerHTML += `<p>${IMC} = Obesidade grau #1</p>`
        }else if (IMC >= 35 && IMC <= 39.9){
            resultado.innerHTML += `<p>${IMC} = Obesidade grau #2</p>`
        }else if (IMC >= 40){
            resultado.innerHTML += `<p>${IMC} = Obesidade grau #3</p>`
        }else {
            resultado.innerHTML += `<p>${IMC} = Número inválido</p>`
            resultado.style.backgroundColor = 'red'
        }
    })
}

CalculoDeIMC()