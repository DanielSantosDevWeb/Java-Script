var info = [ , , ]

function salvar() {
   
   var usu = document.getElementById('usuario').value
   var nome = document.getElementById('nome').value
   var senha = document.getElementById('senha').value
   
   if (usu == '' || nome == '' || senha == '' ) {
      window.alert('ERRO')
   } else {
      info[0] = usu
      info[1] = nome
      info[2] = senha
   }
   
}

function mostrar() {
   
   var para = document.getElementById('para')
   
   para.innerHTML=`seu nome de usuario é <strong> ${info[0]}</strong><br>
   seu nome é <strong>${info[1]} </strong><br>
   e sua senha é <strong> ${info[2]} </strong>`
   
}

function num(n) {
   
   if (n > 0) {
      return 'positivo'
   } else if (n < 0) {
      
      return 'negativo'
   } else {
      return n
   }
}
   
let res = document.getElementById('para')

  res.innerHTML=`${num(5)}`
