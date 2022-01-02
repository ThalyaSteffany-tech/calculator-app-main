let botoes = document.querySelectorAll('[data-botoes]')
let addListener = botoes.forEach((botoes) => {
    botoes.addEventListener('click', () => {
        let btnResultado = botoes.value === '='
        let eNumero = botoes.value != 'delete' && botoes.value != 'reset' && botoes.value != '='
        let btnReset = botoes.value === 'reset'
        let btnDel = botoes.value === 'delete'
        if(btnResultado) {
            realizaOperacao()
        }
        if(eNumero) {
            let telaCalculadora =  document.querySelector('[data-telaCalculadora]')
            telaCalculadora.innerHTML += botoes.value
        }
        if(btnReset) {
            resetaCampo()
        }
        if(btnDel) {
            deletarItens()
        }
    })
})

let realizaOperacao = () => {
    let telaCalculadora =  document.querySelector('[data-telaCalculadora]').innerHTML
    
    if(telaCalculadora) {
        document.querySelector('[data-telaCalculadora]').innerHTML = eval(telaCalculadora)
    }
}

let resetaCampo = () => {
    let telaCalculadora =  document.querySelector('[data-telaCalculadora]').innerHTML = ''
}

let deletarItens = () => {
    let telaCalculadora =  document.querySelector('[data-telaCalculadora]').innerHTML
    document.querySelector('[data-telaCalculadora]').innerHTML = telaCalculadora.substring(0,telaCalculadora.length - 1)
}
