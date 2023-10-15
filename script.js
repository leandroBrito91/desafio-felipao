function verificador() {
  let nomeHeroi = document.getElementById('nomeHeroi').value;
  let expHeroi = document.getElementById('expHeroi').value;
  let exibirResultado = document.getElementById('exibirResultado');
  let nivel;

  if(expHeroi <= 1000){
    nivel = "Ferro";
    }else if(expHeroi >= 1001 && expHeroi <= 2000){
      nivel = "Bronze";
      }else if(expHeroi >= 2001 && expHeroi <= 6000){
        nivel = "Prata";
        }else if(expHeroi >= 6001 && expHeroi <= 7000){
          nivel = "Ouro";
          }else if(expHeroi >= 7001 && expHeroi <= 8000){
            nivel = "Platina";
            }else if(expHeroi >= 8001 && expHeroi <= 9000){
              nivel = "Ascendente";
              }else if(expHeroi >= 9001 && expHeroi <= 10000){
                nivel = "Imortal";
                }else if(expHeroi >= 10001){
                  nivel = "Radiante";
                }
 

  
    exibirResultado.style.textAlign = `center`;
    exibirResultado.style.marginTop = `100px`;
    exibirResultado.style.fontSize = `18pt`;
    exibirResultado.innerHTML = `O herói de nome <strong>${nomeHeroi}</strong> está no nível de <strong>${nivel}</strong>`;
}