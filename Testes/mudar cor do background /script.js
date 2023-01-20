var body = document.querySelector('body')
var intervalo


function azul() {
    
    
    body.style.backgroundColor='blue'
    clearInterval(intervalo)
}

function vermelho() {
    
    body.style.backgroundColor='red'
}

function branco() {
    body.style.backgroundColor='white'
    
}

function aleatorio() {
    
    let cores = ['blue' , 'red' , 'black' , 'yellow' , 'green' , 'gold']
    
    let ale = Math.floor(Math.random() * 6)
    
    body.style.backgroundColor= cores[ale]
    
    
}

function selcor() {
    let cor = document.getElementById('cor')
    console.log(cor)
    
    
}

addEventListener('load', ()=> { intervalo = setInterval(aleatorio, 100)})
