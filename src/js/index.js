const abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)

    }) 
})

    function selecionarAba(aba) {
        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")
        aba.classList.add("selecionado")
    }

    function mostrarInformacoesDaAba(aba) {
        
        const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")
        const idDoElementoDeInformcoesDaAba = `informacao-${aba.id}`
        const informcaoASerMostrada = document.getElementById(idDoElementoDeInformcoesDaAba)
        informcaoASerMostrada.classList.add("selecionado")
    }