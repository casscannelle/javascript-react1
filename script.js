document.getElementById("header").innerHTML = "Hello, World (1)";

document.getElementById("corpo").innerText = "Hello, World (2)";

document.getElementById("artigo").textContent = "Hello, World (3)";

var newElem = document.createElement("p");
newElem.textContent = "Hello, World (4)";
document.getElementById("container").appendChild(newElem);

let textNode = document.createTextNode("Hello, World (5)");
document.getElementById("texto").appendChild(textNode);

const hello = "Hello, World (6)";
document.getElementById("hello").textContent = `${hello}`;


document.getElementById("inner-text").innerText += "Hello, World (7)";

let elemento = document.getElementById("variavel");
elemento.textContent = "Hello, World (8)";

const html = `Hello, World (9)`;
document.getElementById("constante").innerHTML = html;

function escreverHello () {
    let func = document.getElementById("function");
    func.textContent = "Hello, World (10)";
  }

  window.onload = escreverHello ();