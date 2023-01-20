function sta() {
   
   //var img = document.getElementById('img')
   
   var chamar = new Date()

   
   var hora = chamar.getHours()
   var divi = document.getElementById('divi')
   
   
   if (hora < 12) {
      divi.innerHTML='bom dia'
      img.src =`MTN1.jpg`
      document.body.style.background='deepskyblue'
      
   } else if (hora >= 12 && hora < 18) {
      
      divi.innerHTML='boa tarde'
      img.src =`MTN2.jpg`
      document.body.style.backgroundColor='red'
      
   } else if (hora >= 18 && hora <= 24){
      
      divi.innerHTML='boa noite'
      img.src =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRi71l7BE4MNlvv7WTTtok8Lsz4jqZ2mSHdQ&usqp=CAU`
      document.body.style.backgroundColor='black'
   }

   
   
   
}
