function calcular() {
   
   var res = document.getElementById('res')
   var nu1 = document.getElementById('nn1').value
   var selid = document.getElementById('selectid')
   
   if (nu1 == '') {
      window.alert('ERRO')
   } else {
      
      var soma = 1
      
     selid.innerHTML =``
      
      while (soma <= 10 ){
         
         let sel = document.createElement('option')
         sel.text = ` ${nu1} × ${soma} = ${nu1 * soma} `
         
         selid.appendChild(sel)
         
         soma++
         
      }
      
         
      
   }
   
   
}
