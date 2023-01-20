var dat = new Date()

var hora = dat.getHours()
var min = dat.getMinutes()
var ano = dat.getFullYear()
var mes = dat.getMonth()
var dia = dat.getDate()

   var data = document.getElementById('data')
   data.innerHTML=`${hora}:${min} _ ${dia}/${mes + 1}/${ano}`



var emojis = [  ]
      


function repetir() {
   
   var tex = document.getElementById('texto').value
   var repet = document.getElementById('repeticao').value
   var divi = document.getElementById('divicao')
   var lista = document.getElementById('lista')
   
   function emoji() {
      
      let ale = Math.floor( Math.random() * emojis.length )
      
      return emojis[ale ] 
      
   }
   
   lista.innerHTML=''
   
   if ( tex == '' || repeticao == '' || emojis.length == 0) {
      
      alert('ERRO')
   } else {
      
      var rep = 0
      
      for ( rep ; rep < repet ; rep++ ) {
         
         var itens = document.createElement('li')
         
         itens.textContent+=`${tex} , ${emoji()} ${parimp()}`
         
         lista.appendChild(itens)
         
         function parimp() {
            
            if (rep % 2 == 0 ) {
               
               return 'impar'
            } else {
               return 'par'
            }
            
         }
         
      }
      
   }
   
   
}

function add() {
   
   let emo = document.getElementById('emo')
   
   emojis.push(emo.value)
   
   emo.value = ''
   emo.focus()
}

function google() {
    
    location.replace('google.html')
    
}
