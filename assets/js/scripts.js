var input = document.getElementById("tarefa")
var inputcheck = document.getElementById("checkbox")
var ul = document.getElementById("ul");
var item = document.getElementById("li");

document.getElementById("submit").addEventListener("click",function listar(){
  var li = document.createElement("li");
  
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
});


