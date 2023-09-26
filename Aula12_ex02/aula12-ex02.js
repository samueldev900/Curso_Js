function verificou(){
            
            year = document.getElementById('wow')
            n = Number(year.value)
            n = 2023 - n;
            resp = document.getElementById('res')
            radios = document.getElementsByName('grupo')
            var valorSelecionado = "";

            circle = document.getElementById('circle')
            
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    valorSelecionado = radios[i].value;
                    break; // Se um botão de rádio estiver selecionado, saia do loop.
            }
            }
            

            if(valorSelecionado == "masculino"){
                
                resp.innerHTML = `Detectamos um homem com ${n} anos.`
                if(n <= 18){
                    circle.style.backgroundImage = 'url(imagens/menino_adolecente.png)'
                }
                else if (n < 45){
                    circle.style.backgroundImage = 'url(imagens/homem_adulto.png)'
                    
                    
                }

                else if(n > 45){

                    circle.style.backgroundImage = 'url(imagens/idoso-att.png)'
                    
                    
                }
            }
            else{

                resp.innerHTML = `Detectamos uma mulher com ${n} anos.`
                if(n <= 18){
                    circle.style.backgroundImage = 'url(imagens/menina_adolecente.png)'
                }
                else if (n < 45){
                    circle.style.backgroundImage = 'url(imagens/mulher_adulta.png)'
                    
                    
                }

                else if(n > 45){

                    circle.style.backgroundImage = 'url(imagens/mulher-idosa.png)'
                    
                    
                }
                

            }



        }