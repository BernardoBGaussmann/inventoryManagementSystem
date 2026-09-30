let tb = document.getElementById('tabelaCorpo')

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