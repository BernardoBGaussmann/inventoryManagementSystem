
let resumo = document.getElementById('resumo')
let tb = document.getElementById('tabelaCorpo')
let nomeProdutoTxt = document.getElementById('nomeProdutoTxt')
let quantidadeTxt = document.getElementById('quantidadeTxt')
let precoTxt = document.getElementById('precoTxt')
let produtos = []

function add() {
    let idDate = Date.now()
    let idFinal = String(idDate).slice(-4)
    let quantidadeNum = Number(quantidadeTxt.value)
    let precoNum = Number(precoTxt.value)
    let productObject = {
        id: idFinal,
        name: nomeProdutoTxt.value,
        quantity: quantidadeNum,
        price: precoNum,
        subtotal: quantidadeNum * precoNum
    }
    if(nomeProdutoTxt.value.length != 0){
    produtos.push(productObject)
    atualizarTabela()
    } else {window.alert("Informações faltando")}
}

function atualizarTabela() {
    tb.innerHTML = ''

    for (let item of produtos) {
        tb.innerHTML += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.subtotal}</td>
        </tr>`
    }

}