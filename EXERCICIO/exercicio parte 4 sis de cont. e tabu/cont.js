function teste() {
   
   var n1 = document.getElementById('nn1')
   var fim = document.getElementById('fim')
   var passo1 = document.getElementById('passo1')
   var pa = document.getElementById('pa')
   var n2 = 2
   if (n1 == '' || passo1 == '') {
      window.alert('ERRO 404')
      
      } else {
           var i = Number(n1.value)
           var p = Number(passo1.value)
           var f = Number(fim.value)
           
             if ( i > f ) {
                window.alert('erro')
            
             }  else {
         
                 pa.innerHTML=''
         
                 for(  i ;i  < f ; i += p) {
            
                 pa.innerHTML += ` <br> ${i} `
             }
             
             pa.innerHTML +=`fim \u{1F60E}`
         /*
         while ( i <= f ) {
            pa.innerHTML+=`${i}` "OPÇÃO COM WHILE "
            i += p
         */
         }
       }
         
         
         
         
      }
   

