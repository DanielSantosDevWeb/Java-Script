var hora = document.getElementById('horas').value
var minutos = document.getElementById('minutos').value
var segundos = document.getElementById('segundos').value

var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var n4 = document.getElementById('n4')
var n5 = document.getElementById('n5')
var n6 = document.getElementById('n6')
var n7 = document.getElementById('n7')
var n8 = document.getElementById('n8')
var n9 = document.getElementById('n9')
var n0 = document.getElementById('n0')

var minn = 0
var segn = 15

function doisNum( num1 ) {
    
    if (num1 < 10  ) {
        return ('0' + num1)
    } else {
        return num1
    }
    
}

function addNumero( numero ) {
    
    let div = document.getElementById('div')
    
    div.innerHTML='0' + numero +':15'
    var n1 = Number(numero)
    
    minn = n1
    
}

function iniciar() {
    
    if (minutos.value == '' || segundos.value == '') {
        window.alert('erro')
    } else {
        setInterval(alarme, 1000)
        let div = document.getElementById('div')
        //div.innerHTML+= minn + ';' + segn
        
    }
    
}

function alarme() {
    
    let div = document.getElementById('div')
    
    
    if (minn >= 1 && segn >= 1 ) {
        
        if (  segn > 1) {
            segn--
            
            div.innerHTML= doisNum(minn) +';' + doisNum(segn)
            
        } else if ( segn >= 0) {
            minn--
            segn = 60
            div.innerHTML='0' +minn +';' + segn
            
        }
        
    } else if ( minn == 0 && segn >= 1) {
        
        if ( segn >= 1 ) {
            segn--
            div.innerHTML= doisNum(minn) +':' + doisNum(segn)
            
        } else if ( segn == 0  ) {
            div.innerHTML='alarme'
            
        }
        
    }
    
    
    
}

