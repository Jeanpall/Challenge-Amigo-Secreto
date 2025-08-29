// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Asignacion Variables
let listaAmigos = [];

function agregarAmigo() {
  let nombreCampoAmigo = document.getElementById("amigo").value;

  if (nombreCampoAmigo === "") {
    asignarTexto("p", "Por favor ingrese un nombre");
    return;
  } else {
    listaAmigos.push(nombreCampoAmigo);
    document.getElementById("listaAmigos").innerHTML = nombreCampoAmigo;
    listaAmigos.forEach(function (elemento) {
      console.log(elemento);
    });
    // console.log(listaAmigos);
    document.getElementById("amigo").value = "";
    return;
  }
}

listaAmigos.forEach(function (elemento) {
  console.log(elemento);
});

// Funcion para la lista de amigos
function mostrarListaAmigos() {}

// Funcion para sortear el amigo al azar
function sortearAmigo() {}

// Definir funcion para llamar texto predeterminado
function asignarTexto(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
  return;
}
