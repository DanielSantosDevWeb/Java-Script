var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var res = document.getElementById('res')


function mais() {
   
   let n1 = Number(num1.value)
   let n2 = Number(num2.value)
   
   if ( n1 == '' || n2 == '') {
      
      res.innerHTML='erro'
      
   } else {
   
   let soma = n1 + n2
   
   res.innerHTML=`${n1} + ${n2} e igual a ${soma}`
   
   }
}

function menos() {
   
   let n1 = Number(num1.value)
   let n2 = Number(num2.value)
   
   if (n1 == '' || n2 == '') {
   
      res.innerHTML = 'erro'
   
   } else {
   
      let menos = n1 - n2
   
      res.innerHTML = `${n1} + ${n2} e igual a ${menos}`
   
   }
   
}

function vezes() {
   
   let n1 = Number(num1.value)
   let n2 = Number(num2.value)
   
   if (n1 == '' || n2 == '') {
   
      res.innerHTML = 'erro'
   
   } else {
   
      let vezes = n1 * n2
   
      res.innerHTML = `${n1} + ${n2} e igual a ${vezes}`
   
   }
   
}

function divid() {
   
   let n1 = Number(num1.value)
   let n2 = Number(num2.value)
   
   if (n1 == '' || n2 == '') {
   
      res.innerHTML = 'erro'
   
   } else {
   
      let div = n1 / n2
   
      res.innerHTML = `${n1} + ${n2} e igual a ${div}`
   
   }
   
}


