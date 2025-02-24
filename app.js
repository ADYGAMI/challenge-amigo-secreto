let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;    
    
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(amigo);
        console.log(amigos);
        document.querySelector('#amigo').value = '';
        actualizarListaAmigos();
    }
    return;
}

function actualizarListaAmigos(){

    // Seleccionar la lista por su ID
    const listaAmigos = document.getElementById('listaAmigos');

    // Vaciar el contenido de la lista
    listaAmigos.innerHTML = '';

    // Recorrer el array y agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }
    return;
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo.');
    }else{    
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
    }    
    return;
}
