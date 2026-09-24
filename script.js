
let resumo = document.getElementById('resumo')
let nomeProdutoTxt = document.getElementById('nomeProdutoTxt')
let quantidadeTxt = document.getElementById('quantidadeTxt')
let precoTxt = document.getElementById('precoTxt')


let productObject = { id: '', name: `${nomeProdutoTxt.value}`, quantity: `${quantidadeNum}`, price: `${precoNum}`, subtotal: '' }
let produtos = [productObject]

function add() {
    let quantidadeNum = Number(quantidadeTxt.value)
    let precoNum = Number(precoTxt.value)
    resumo.innerText += `${precoNum} + ${quantidadeNum} + ${nomeProdutoTxt.value}`
    //resumo.innerHTML = produtos.value

}