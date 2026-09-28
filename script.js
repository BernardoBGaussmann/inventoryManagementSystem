
let resumo = document.getElementById('resumo')
let tb = document.getElementById('tabelaCorpo')
let nomeProdutoTxt = document.getElementById('nomeProdutoTxt')
let quantidadeTxt = document.getElementById('quantidadeTxt')
let precoTxt = document.getElementById('precoTxt')
let produtos = []

function verificarRep() {
    let encontrouRepetido = false
    
    for (let repetidos of produtos) {
        if (repetidos.name == nomeProdutoTxt.value) {
            encontrouRepetido = true
        } else {
            encontrouRepetido = false
        }
    } if (encontrouRepetido == false) {
        atualizarTabela()
        add()
    } else {
        window.alert('Item já cadastrado!')
    }
}

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
    
    if (nomeProdutoTxt.value.length != 0) {
        produtos.push(productObject)
        atualizarTabela()
    } else { window.alert("Informações faltando") }
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

function apagarItem() {
    let inputBusca = document.getElementById('inputBusca')
    
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == inputBusca.value) {
            produtos.splice(i, 1)
            atualizarTabela()
            inputBusca.value = ""
            window.alert("Produto removido")
        }
    }
}