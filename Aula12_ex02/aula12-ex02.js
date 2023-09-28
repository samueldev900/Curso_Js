function verificou(){

    var valorSelecionado = "";
    const data = new Date();
    const ano = data.getFullYear();
    anoNasc = document.getElementById('ano1')
    resp = document.getElementById('res')
    radios = document.getElementsByName('grupo')
    circle = document.getElementById('circle')
    n = Number(anoNasc.value)
    

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valorSelecionado = radios[i].value;
            break; // Se um botão de rádio estiver selecionado, saia do loop.
    }
    }

    if(n > ano || valorSelecionado == "" || n == 0){

        window.alert('[Erro] Confira os dados e tente novamente!!')
    }
    
else{
    if(valorSelecionado == "masculino"){
        
        resp.innerHTML = `Detectamos um Homem com ${ano - n} anos.`
        if(ano - n <= 18){

            circle.style.backgroundImage = 'url(imagens/menino_adolecente.png)'
        }
        else if (ano - n < 45){

            circle.style.backgroundImage = 'url(imagens/homem_adulto.png)'
        }

        else if(ano - n > 45){

            circle.style.backgroundImage = 'url(imagens/idoso-att.png)'
        }
    }
    else if(valorSelecionado == "feminino"){

        resp.innerHTML = `Detectamos uma Mulher com ${ano - n} anos.`

        if(ano - n <= 18){
            circle.style.backgroundImage = 'url(imagens/menina_adolecente.png)'
        }
        else if (ano - n < 45){

            circle.style.backgroundImage = 'url(imagens/mulher_adulta.png)'
        }

        else if(ano - n > 45){

            circle.style.backgroundImage = 'url(imagens/mulher-idosa.png)'
            
        }
        
    }

}

}