let tb = document.getElementById('tabelaCorpo')
let totalItens = document.getElementById('totalItens')
let valorTotal = document.getElementById('valorTotal')

export function atualizarTabela(produtos) {
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

export function atualizarStats(qtdItens, total){
    totalItens.innerHTML = qtdItens
    valorTotal.innerHTML = `R$${total.toFixed(2)}`
}