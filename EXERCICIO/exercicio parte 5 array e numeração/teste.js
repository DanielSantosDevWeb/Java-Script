let arra = []
var receb = document.getElementById('recebimento')
var result = document.getElementById('resultado')

function adicionar() {
   
   let num = document.getElementById('num')
   var num1 = Number(num.value)
   
   
   
   if (num1 == "" || num1 > 100 || num1 < 0) {
      window.alert('ERRO')
   } else if ( arra.length < 6){
      
      arra.push(num1)
      
      receb.innerHTML+=`<br>Voce adicionou o número ${num1} <br>`
      
      
   } else {
      receb.innerHTML+='Voce chegou no limite'
   }
   num.value =''
   num.focus()
   
   result.innerHTML=''
}

function mostrar() {

   let n10 = arra.length
   
   let maior = arra[0]
   let menor = arra[0]
   
   let soma = 0
   let media = 0
   
  // for( var pos in arra ) { // Cria a var 'pos' recebendo o array 'arra' ++ a variavel
      
   for ( var pos = 0 ; pos < arra.length ; pos++ ) {
      
      soma += arra[pos]
      media =  soma / n10
      
      if ( arra[pos] > maior ) // Ver se a posição 'pos' da array é maior que o primeiro numero da array
      maior = arra[pos] // quando chegar no meior numero adiciona e para
      
      if ( arra[pos] < menor)
      menor = arra[pos] // quanro chegar ao menor numero adicuona e para
      
   }
   
   
   
   result.innerHTML=`você adicionou ${n10} </br>
      o peimeiro numero é o ${arra[0]} </br>
      o maior é o ${maior}<br>
      o menor e o ${menor}<br>
      a soma é ${soma} </br>
      e a media é ${media}`
      
   arra.splice()
   receb.innerHTML=''
   
   
}
