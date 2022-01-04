var input = document.getElementById("tarefa")
var inputcheck = document.getElementById("checkbox")
var ul = document.querySelector("ul");

document.getElementById("submit").addEventListener("click",function listar(){
  //var li = document.createElement("li")
    ul.innerHTML +=`<li>${input.value}</li>    `
 /*  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li); */
  input.value = "";
});


