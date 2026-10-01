import { produtos, verificarRep, apagarItem, stats, valor} from "./produtos.js";
import { atualizarTabela, atualizarStats} from "./interface.js";

let botaoAdicionar = document.getElementById('botaoAdicionar')
let botaoApagar = document.getElementById('botaoApagar')

botaoAdicionar.addEventListener('click', function(){
    verificarRep()
    atualizarTabela(produtos)
    let qtdItens = stats()
    let total = valor()
    atualizarStats(qtdItens, total)


})
botaoApagar.addEventListener('click', function() {
    apagarItem()
    atualizarTabela(produtos)
    let qtdItens = stats()
    let total = valor()
    atualizarStats(qtdItens, total)
})