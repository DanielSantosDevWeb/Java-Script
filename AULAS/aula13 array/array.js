var div = document.getElementById('div')


var num = [ 3, 5, 1, 9]

var pos = num.indexOf(1) // Retorna a posição do numero chamado
num[4]= 11  // Adicionar um elemento dentro do bloco da var 
num.push(7) // Cria um bloco e adiciona um elemento


div.innerHTML+=`${num.length}<br>` // mostra quantos blocod a var tem
div.innerHTML+=`${num}<br>` // mostra a var com todos os elementos

// div.innerHTML+=`${num.sort()}<br>` // mostra a var com os elementos em ordem

for( let limite = 0 ; limite < num.length ; limite++ ) {
   
   div.innerHTML+= `o ${limite} valor é ${num[limite]}<br>`
   
}

div.innerHTML+=`o número 1 esta na posição ${pos}`
