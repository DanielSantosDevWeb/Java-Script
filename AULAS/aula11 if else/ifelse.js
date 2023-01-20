function testar() {

   var pais = document.getElementById('txpais').value
   var teste = window.document.querySelector('input#tes')
   var res = document.getElementById('res')

   //var pais = String(pais.value)
   //var pa = 'Brasil'

   if (pais == 'Brasil' || pais == 'Argentina' || pais =='Uruguai') {

      res.innerHTML = `você é brasi`

   } else if (pais == 'Alemanha' || pais =='França' || pais == 'Portugal') {

      res.innerHTML = `voce e europeu`
   } else {

      res.innerHTML = `voce e estra`
   }
}
   
   //var chamar = new Date()
   var mostra = document.getElementById('hora')
   var chamar = new Date()
   var horario = chamar.getHours()
   var min = chamar.getMinutes()
   
   if (horario >6 && horario <12) {
      mostra.innerHTML = `São ${horario}${min}... Bom dia`
   } else if (horario > 12 && horario < 18 ) {
      mostra.innerHTML = `São ${horario}:${min}... Boa Tarde`
   } else {
      mostra.innerHTML = `Sao ${horario}:${min}... Boa Noite`
   }
      
      
   





