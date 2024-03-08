const botoes = document.querySelectorA11(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=o;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
    }
}