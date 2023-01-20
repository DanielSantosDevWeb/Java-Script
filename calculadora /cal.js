var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')

var calculores = document.getElementById('calculo')
var res = document.getElementById('res')


var meno = 0
var vez = 0
var div = 0

var numeros = [  ]


function igual() {
   
   
   
}

function mais() {
   
   var n1 = Number(num1.value)
   
   var soma = n1 
   
   res.innerHTML=`${ soma}`
}

function menos() {
   
   let n1 = Number(num1.value)
   
   meno = soma - n1
   
   res.innerHTML=`${meno}`
   
}
