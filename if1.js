function soBoaNoticia(nota) {
    if(nota >=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ........' + valor)
    }
}
//os falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
//os verdadeiros
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})