// BOTÕES 
const botoes = document.getElementsByClassName("itensDaLista")
// BOTÔES

// SEÇÕES
const secoesDaCaixa = document.getElementsByClassName("secoesDaCaixa")
// SEÇÕES
for (let i = 0; i < botoes.length; i++) {
    const btnList = botoes[i];

    btnList.addEventListener('click', () => {
        for (let i = 0; i < secoesDaCaixa.length; i++) {
            const secoes = secoesDaCaixa[i];
            const secaoPadrao = secoesDaCaixa[0]


            if (btnList.id === "btn-artes" && secoes.id === "secaoArtes") {
                secoes.style.display = "flex"
                secaoPadrao.style.display = "none"
            }else if (btnList.id === "btn-contribuentes" && secoes.id === "secaoContribuentes") {
                secoes.style.display = "flex"
                secaoPadrao.style.display = "none"
            }else if (btnList.id === "btn-sobrenos" && secoes.id === "secaoSobreNos") {
                secoes.style.display = "block"
                secaoPadrao.style.display = "none"
            }else if (btnList.id === "btn-contatos" && secoes.id === "secaoContatos") {
                secoes.style.display = "flex"
                secaoPadrao.style.display = "none"
            }else{
                secoes.style.display = "none"
            }
        }
    })
}

