var city = document.getElementById('city')
var estado = document.getElementById('estado')
var btnPesquisar = document.getElementById('pesquisar')
var res = document.getElementById('resultados')
var key = 'b1cc7b670b0d8f311e70ffc7a7773b98'

function emoji() {
    
    const dadosH = new Date()
    const hora = dadosH.getHours()
    
    if (hora < 6) {
        return  '🌚'
    } else if (hora < 18) {
        return  '☀️'
    } else {
        return '🌚'
    
    console.log(hora)
    }
}

async function chamarClima( la , lo, pais, state, city) {
    
    const UrlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=${key}`
    
    const dadosClima = await fetch(UrlClima)
    const clima = await dadosClima.json()
    
    temperatura = clima.main.temp - 273,5
    
    console.log(clima)
    
    res.innerHTML= `Cidade: ${city} ,  ${state} ${pais} <br>
                    Temperatura: ${temperatura.toFixed(1)}° ${emoji()} <br>
                    Latitude: ${la.toFixed(2)},<br> Longitude: ${lo.toFixed(2)}`
}
    
async function chamarCord() {
    
    if ( city.value == '' ) {
        res.innerHTML= 'erro'
    } else {
        
    
    const UrlCord = `http://api.openweathermap.org/geo/1.0/direct?q=${city.value},${estado.value}&limit=${5}&appid=${key}`
    
    const dadosCord = await fetch(UrlCord)
    const cord = await dadosCord.json()
    
    if ( cord == '') {
        res.innerHTML = 'país invalido'
        
    } else {
        const lat = cord[0].lat
        const lon = cord[0].lon
        const pais = cord[0].country
        const stade = cord[0].state
        const cidade = cord[0].name
        
        
        
        return chamarClima( lat , lon, pais, stade , cidade)
        }
    }
}


btnPesquisar.addEventListener('click' , chamarCord)
