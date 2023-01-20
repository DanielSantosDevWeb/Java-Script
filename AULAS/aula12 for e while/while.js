function repet() {
   var n1 = 1
   var tnumb = document.getElementById('num').value
   var divi = document.getElementById('divi')
   var tex = document.getElementById('tex').value
   //var numb = Number(tnumb.value)
   //var textx = String(tex.value)
   
   
   
   while (n1 <= tnumb) {
      
      divi.innerHTML +=`<br><strong>repetição do numero ${n1} : ${tex}</strong></br>`
      n1++
      
   }
   
   
   
}
