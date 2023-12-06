console.log("JS CONECTADO")

const botaoSubtrair = document.getElementById("subtrair")
const botaoSomar = document.getElementById("somar")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")

function somar() {

    const numero1 = parseFloat(document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector("#numero2Soma").value)

    const resultado = numero1 + numero2
    document.getElementById("resultadoSomar").innerHTML = resultado
 
}
function subtrair() {

    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const resultado = numero1 - numero2
    document.getElementById("resultadoSubtração").innerHTML = resultado

}

function multiplicar() {
    
    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)

    const resultado = numero1 * numero2
    document.getElementById("resultadoMultiplicacao").innerHTML = resultado

}


function dividir() {

    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)

    const resultado = numero1 / numero2
    document.getElementById("resultadoDivisao").innerHTML = resultado

}

botaoSubtrair.addEventListener("click", subtrair)
botaoSomar.addEventListener("click", somar)
botaoMultiplicar.addEventListener("click", multiplicar)
botaoDividir.addEventListener("click", dividir)
