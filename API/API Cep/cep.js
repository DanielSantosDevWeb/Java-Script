
function preencher(endereco) {
    
    var cidade = endereco.localidade
    var ddd = endereco.ddd
    var uf = endereco.uf
    var cep = endereco.cep
    const res = document.getElementById('resultado')
    
    res.innerHTML=`Cidade : ${cidade} <br> ddd : ${ddd} <br> uf : ${uf} <br> cep : ${cep}`
}

async function  calcular() {
    
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const res = document.getElementById('resultado')
        
    
    if ( cep.length <= 7 ) { 
        res.innerHTML='cep muito pequeno'
        
    } else if ( cep.length >= 9  ) {
        res.innerHTML='cep muito grande'
        
    } else {
        
        const dados = await fetch(url)
        const endereco = await dados.json()
        
        if ( endereco.localidade == undefined) {
            res.innerHTML='cep invalido'
            
        } else {
            
        // fetch() retorna o resultado da minha url
        // then() manda escrever a fetch dentro do console.log
        
        console.log(dados)
        preencher(endereco)
        }
        
    }
}
