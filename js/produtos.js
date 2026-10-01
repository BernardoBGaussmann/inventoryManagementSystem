export let produtos = []

export function verificarRep() {
    let nomeProdutoTxt = document.getElementById('nomeProdutoTxt')
    let encontrouRepetido = false
    
    for (let repetidos of produtos) {
        if (repetidos.name == nomeProdutoTxt.value) {
            encontrouRepetido = true
            break
        }
    } 
    if (encontrouRepetido == false) {
        add()
    } else {
        window.alert('Item já cadastrado!')
    }
}

function add() {
    let nomeProdutoTxt = document.getElementById('nomeProdutoTxt')
    let quantidadeTxt = document.getElementById('quantidadeTxt')
    let precoTxt = document.getElementById('precoTxt')

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
    } else { window.alert("Informações faltando") }
}

export function apagarItem() {
    let inputBusca = document.getElementById('inputBusca')
    
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == inputBusca.value) {
            produtos.splice(i, 1)
            inputBusca.value = ""
            window.alert("Produto removido")
            break
        }
    }
}

export function stats(){
    let qtdItens = produtos.length
    return qtdItens
}

export function valor(){
   let total = 0
   for (let produto of produtos){
    total += produto.subtotal
   }
   console.log(total)
   return total
}