//let titulo = document.querySelector('h1') //varável titulo = document para acessar uma tag html e query selector para especiicar qual
//titulo.innerHTML = 'Descubra o número secreto' //para colocar um texto dentro do h1 linha 22

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10' //linha 23

let listaNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value // value para pegar apenas o valor digitado

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1', 'Acertou miserávi')
        exibirTextoNaTela('p', mensagemTentativas)

        document.getElementById('reiniciar').removeAttribute('disabled') //pega o atributo por id para ele saber qual botão é
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O número secreto é maior')
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor')
        }
        tentativas++
        limparCampo()
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1  
    exibirMensagemInicial()  
    document.getElementById('reiniciar').setAttribute('disabled', true) // desabilitar novamento o botão de novo jogo

}

function limparCampo() {
    chute = document.querySelector('input') // pega o campo input
    chute.value = '' // atribui o valor vazio para input
}

//função com parâmetro

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

//  função com retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let qtdElementoLista = listaNumerosSorteados.length

    if (qtdElementoLista == numeroLimite){
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){ // includes verifica se o elemento ta na lista
        return gerarNumeroAleatorio() // recursão
    }else{
        listaNumerosSorteados.push(numeroEscolhido) // adiciona um item ao final da lista
        console.log(listaNumerosSorteados)
        return numeroEscolhido
    }
}

