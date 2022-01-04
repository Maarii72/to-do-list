var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click",function increment(){
  currentNumber = currentNumber + 1;
  
  //voltar para cor se o numero for positivo
  if(currentNumber >= 0){
    document.getElementById("currentNumber").style.color='rgb(105, 89, 99)';
  }

  //desabilitar botão ao chegar no 10
  if(currentNumber >= 10){
    document.getElementById("adicionar").disabled = true;
    document.getElementById("subtrair").disabled = false;
  }
  document.getElementById("currentNumber").innerHTML= currentNumber;
});



document.getElementById("subtrair").addEventListener("click",function increment(){
  
  currentNumber = currentNumber - 1;
  

  //mudar cor quando número for negativo
  if (currentNumber < 0) {
    document.getElementById("currentNumber").style.color='#B22222';
  }
  //fim da mudança de numero negativo

  //desabilitar botão ao chegar no 0
  if(currentNumber >= 0){
    document.getElementById("subtrair").disabled = true;
    document.getElementById("adicionar").disabled = false;
  }
  document.getElementById("currentNumber").innerHTML= currentNumber;

  
});
