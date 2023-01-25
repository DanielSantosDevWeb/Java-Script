var milsegundos = 0
var segundos = 0
var minutos = 0
var hora = 0
var conometro = document.getElementById('conometro')
var conome = document.getElementById('spane')

var btiniciar = document.getElementById('comecar')
var btparar = document.getElementById('parar')
var btreiniciar = document.getElementById('reiniciar')

var watch

function doisdigitos(num1) {
    
    if (num1 < 10) {
        return ('0' + num1)
    } else {
        return num1
    }
    
}

function começar() {
    
    watch = setInterval(relogio, 10)
    
    btiniciar.disabled = true
    btparar.disabled = false
    btreiniciar.disabled = false

}

function parar() {
    
    btiniciar.disabled = false
    btparar.disabled = true
    btreiniciar.disabled = false
    
    clearInterval(watch)
}

function reiniciar() {
    
    btiniciar.disabled = false
    btreiniciar.disabled = true
    
    
    clearInterval(watch)

    milsegundos=0
    segundos=0
    minutos=0
    hora=0
    
    conometro.innerHTML= '00:00:00'
    conome.innerHTML='00'
    
    
}

function relogio() {
    
    milsegundos++
    
    conometro.innerHTML= doisdigitos(hora)+':'+ doisdigitos(minutos)+':'+ doisdigitos(segundos)
    
    conome.innerHTML=milsegundos
    
    if (milsegundos > 99) {
        milsegundos = 0
        segundos++
        
    } else if (segundos > 59) {
        segundos = 0
        minutos++
    } else if (minutos > 59) {
        minutos = 0
        hora++
    }
    
}
