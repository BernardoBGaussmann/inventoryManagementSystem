import { produtos, verificarRep, apagarItem } from "./produtos.js";
import { atualizarTabela } from "./interface.js";

let botaoAdicionar = document.getElementById('botaoAdicionar')
let botaoApagar = document.getElementById('botaoApagar')

botaoAdicionar.addEventListener('click', function(){
    verificarRep()
    atualizarTabela(produtos)
})
botaoApagar.addEventListener('click', function() {
    apagarItem()
    atualizarTabela(produtos)
})