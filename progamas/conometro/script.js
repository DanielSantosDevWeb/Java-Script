function relogio() {
    let numeros = document.getElementById('conome')
    var conomentro = new Date()
    let milseg = conomentro.getMilliseconds()
    let seg = conomentro.getSeconds()
    let min = conomentro.getMinutes()
    let hr = conomentro.getHours()
    
    numeros.innerHTML=`${hr} : ${min} : ${seg} `
    
}

setInterval(relogio, 10)



var hora = document.getElementById('hora')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var milsegundos = document.getElementById('milsegundos')

var btnreniciar = document.getElementById('reiniciar')
var btniniciar = document.getElementById('iniciar')
var btnpausar = document.getElementById('pausar')

    
    let h = 0
    let m = 0
    let s = 0
    let ms = 0

function iniciar() {
    
    btniniciar.disabled = true
    btnpausar.disabled = false

    
    
    intervaloh = setInterval(()=> {
        h++
        hora.innerHTML=`${h}`
        
    }, 3600000)
    
    intervalom = setInterval(() => {
        m++
        minutos.innerHTML = `${m}`
    
    }, 60000)
    
    intervalos = setInterval(() => {
        s++
        segundos.innerHTML = `${s}`
    
    }, 1000)
    
    intervaloms = setInterval(() => {
        ms++
        milsegundos.innerHTML = `${ms}`
        
        
    }, 100)
}
    

function pausar() {
    
    btnpausar.disabled = true
    btniniciar.disabled = false
    
    clearInterval(intervaloms)
    clearInterval(intervalos)
    clearInterval(intervalom)
    clearInterval(intervaloh)
    
}

function reiniciar() {
    btnpausar.disabled = true
    btniniciar.disabled = false
    
    clearInterval(intervaloms)
    clearInterval(intervalos)
    clearInterval(intervalom)
    clearInterval(intervaloh)
    
    
    ms = 0
    
}
