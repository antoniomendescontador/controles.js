const imprimirResultado = function (nota) {
    if(nota >= 7){
        console.log('aprovado')
    } else{
        console.log('reprovado')
    }
}

imprimirResultado(6)
imprimirResultado(8)
imprimirResultado('opa')//cuidado pois não passei um número o caiu no else