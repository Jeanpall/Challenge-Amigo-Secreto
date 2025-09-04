// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Asignacion Variables
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let nombreCampoAmigo = document.getElementById("amigo").value;

  if (nombreCampoAmigo === "") {
    alert("Por favor, ingrese un nombre");
    return;
  } else {
    // Agregar a la lista
    listaAmigos.push(nombreCampoAmigo);

    // Mostrar la lista actualizada
    recorrerLista();

    // Limpiar el campo input
    document.getElementById("amigo").value = "";
  }
}

// Función para mostrar la lista en el HTML
function recorrerLista() {
  let lista = document.getElementById("listaAmigos");

  //Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y crear <li> por cada nombre creado
  for (let i = 0; i < listaAmigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = listaAmigos[i];
    lista.appendChild(li);
  }
}


// Funcion para sortear el amigo al azar
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    asignarTexto("p", "No hay amigos en la lista para sortear");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = `
    <li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
  document.getElementById("listaAmigos").innerHTML = "";
}

// Definir funcion para llamar texto predeterminado
function asignarTexto(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
  return;
}
