function escreve(msg) {
   
   var um = $('#ola')
   if (um.length == 0) {
      
      um = $('<div id="ola"> divi </div>')
      um.appendTo(document.body)
   } 
   um.append($("<pre/>").text(msg))
}
/*
var divi = document.getElementById('ola')

divi.innerHTML=`${escreve()}`
