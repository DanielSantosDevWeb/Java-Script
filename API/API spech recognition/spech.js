var btniniciar = document.getElementById('gravar')
var btnparar = document.getElementById('parar')
var btnfalar = document.getElementById('falar')
var res = document.getElementById('resultado')
var body = document.querySelector('body')
var texto = ''

var recog = CriarRec()

btnfalar.addEventListener('click', () => {
    
    const speech = window.speechSynthesis

    const falar = new SpeechSynthesisUtterance(texto)

    //speechSynthesis.speak(falar)
    speech.lang = 'pt-br'
    speech.pitch = 0.5
    
    speech.speak(falar)
    
})

btniniciar.addEventListener('click', () => {

    iniciar()
    console.log('iniciou!!')
})

btnparar.addEventListener('click', () => {
    recog.stop()
    console.log('parou!!')
    teste()

})

function iniciar() {

    recog.start()
}

function teste() {

    const fud = 'mudar para fundo preto'

    fud.includes('fundo' + ' preto') ? fundo('black') : null

    console.log(fud)

}

function botao(cores) {

    btnparar.style.backgroundColor = cores
}

function fundo(cores) {

    body.style.backgroundColor = cores
    cores == 'black' ? body.style.color = 'white' : body.style.color = 'black'

}

function botaoredondo(px) {

    btnparar.style.borderRadius = px
}

function abrirApp(url) {
    window.open(url)
}

function CriarRec() {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
    const recog = new SpeechRecognition()
    const RecognitionList = new SpeechGrammarList()
    const grammar = '#JSGF V1.0; grammar colors; public <color> = botão azul | botão branco | botão preto | botão redondo | preto | azul | botão quadrado | chocolate | instagram | crimson | cyan | fuchsia | fumaça | ouro | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'

    RecognitionList.addFromString(grammar, 1)

    recog.grammars = RecognitionList
    recog.lag = 'pt-BR'
    recog.onstart = () => console.log('me fale uma cor')
    recog.onresult = (evt) => {

        texto = evt.results[0][0].transcript

        res.innerHTML = texto

        texto.includes('fundo preto') ? fundo('black') : null
        texto == 'fundo azul' ? fundo('blue') : null
        texto == 'fundo ouro' ? fundo('gold') : null
        texto == 'fundo fumaça' ? fundo('ghostwhite') : null
        texto == 'fundo amarelo' ? fundo('yellow') : null
        texto.includes('fundo marrom') ? fundo('pink') : null
        texto == 'botão azul' ? botao('skyblue') : null
        texto == 'botão preto' ? botao('black') : null
        texto == 'botão branco' ? botao('white') : null
        texto == 'botão verde' ? botao('green') : null
        texto == 'botão amarelo' ? botao('yellow') : null
        texto == 'botão redondo' ? botaoredondo('30px') : null
        texto == 'botão quadrado' ? botaoredondo('0px') : null
        texto == 'Abrir Instagram' ? abrirApp('https://www.instagram.com/') : null
        texto == 'Abrir Facebook' ? abrirApp('https://www.facebook.com') : null
        texto == 'Abrir Twitter' ? abrirApp('https://www.twitter.com') : null
        texto == 'Abrir WhatsApp' ? abrirApp('https://api.whatsapp.com/') : null

        //body.style.backgroundColor = cor
    }

    return recog

}
