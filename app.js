// Guardar nombres
let amigos = [];

// Añadir un amigo
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor escribe un nombre");
        return;
    }

     // Validar solo letras y espacios (simple)
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombre)) 
    {
        alert("Solo se permiten letras y espacios");
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarLista();
}

// Mostrar lista en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres");
    } else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";

        let item = document.createElement("li");
        item.textContent = "El amigo secreto es: " + amigos[aleatorio];
        resultado.appendChild(item);
    }
}
