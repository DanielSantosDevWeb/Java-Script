var texto = document.getElementById('texto')
var btn = document.getElementById('falar')
var res = document.getElementById('res')

function falarTexto(text) {
    
    const speech = window.speechSynthesis 
    
    const falar = new SpeechSynthesisUtterance(texto.value)
    
    falar.lang = 'pt-br'
    falar.pitch = 0.5
    
    speech.speak(falar)
    
    console.log(falar)
    
    
}


btn.addEventListener('click' , ()=> {
    falarTexto(texto.value)
})
