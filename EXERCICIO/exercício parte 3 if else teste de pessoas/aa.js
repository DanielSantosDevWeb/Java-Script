function idade() {
   
   var nas = document.querySelector('input#anotxt').value
 //  var par = document.getElementById('pa')
   
   var chamar = new Date()
   var ano = chamar.getFullYear()

   var idad = ano - nas
   
   if (nas > ano || nas <= 1900 || nas == ''  ) {
      window.alert('ERROR 404')
   } else  {
      var nome = document.getElementById('nome').value
      
      var pa = document.getElementById('pa')
      var pa1 = document.getElementById('pa1')
      var sexo = document.getElementsByName('sexo')
      var imge = document.getElementById('imge')
      var genero =''
      
      if (sexo[0].checked) {
         
            if (idad <18) {
               imge.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl6tyeMt06Kn-QzsaPvLzS_d41nkNqYUHSg&usqp=CAU'
               genero = 'um menino'
            
            } else if (idad >=18 && idad <45) {
               imge.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7OvrUINtbtomcJH8SMw6TGzDpxoV9meUdQ&usqp=CAU'
               genero ='um homem'
            
            } else {
               imge.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVouFCZZXCXDRBez4GGDBsLJgOgC4pY-qAHQ&usqp=CAU'
               genero ='um idoso'
            }
         
     } else if (sexo[1].checked) {
            if (idad < 18) {
               imge.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2t1ceM3_2zuHykqjbgXHD7oNvnHAYg_S_OA&usqp=CAU'
               genero = 'uma menina'
            
            } else if (idad >= 18 && idad < 45) {
               imge.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUIt8dFThpGj37LQDn45IypLLHS04MKEbhg&usqp=CAU'
               genero = 'uma Mulher'
            
            } else {
               imge.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3DpVEpRqDAjetLVQLc6JhvNLnTlfZO3LdQ&usqp=CAU'
               genero = 'uma idosa'
         }
      }
      
      pa.innerHTML=`ola ${nome}, você e ${genero} e tem ${idad} anos`
      
   }
      
   
}
   
   
   

