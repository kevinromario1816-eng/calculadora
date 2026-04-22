let input1 = document.querySelectorAll(".inputnumber")[0]
let input2 = document.querySelectorAll(".inputnumber")[1]
let operacion = document.querySelector(".inputoperation")
let resultado = document.querySelector(".resultado")
let pantalla = document.querySelector(".operation_section h1")

let activo = input1


document.querySelectorAll(".btn-numero").forEach(function(boton) {
    boton.addEventListener("click", function() {
        activo.value = activo.value + boton.innerText
    })
})


document.querySelectorAll(".btn-operation").forEach(function(boton) {
    boton.addEventListener("click", function() {
        operacion.value = boton.innerText
        activo = input2
    })
})


document.getElementById("DELETE").addEventListener("click", function() {
    input1.value = ""
    input2.value = ""
    operacion.value = ""
    resultado.value = ""
    pantalla.innerText = "0"
    activo = input1
})


function calcular() {
    let n1 = Number(input1.value)
    let n2 = Number(input2.value)
    let op = operacion.value
    let res

    if (op == "+") res = n1 + n2
    if (op == "-") res = n1 - n2
    if (op == "x") res = n1 * n2
    if (op == "/") res = n2 == 0 ? "ERROR" : n1 / n2

    resultado.value = res
    pantalla.innerText = res
}


document.getElementById("igual").addEventListener("click", calcular)


input1.addEventListener("input", calcularSiCompleto)
input2.addEventListener("input", calcularSiCompleto)
operacion.addEventListener("input", calcularSiCompleto)