function crearCarrusel(id, cantidad) {
    let indiceActual = 0;
    const contenedor = document.querySelector('#' + id + ' .carrusel-contenedor');
    const botonNext = document.getElementById('next' + id.slice(-1));
    const botonPrev = document.getElementById('prev' + id.slice(-1));

    function mostrarImagen(indice) {
        contenedor.style.transform = 'translateX(-' + (indice * 100) + '%)';
    }

    // Botón de siguiente
    botonNext.addEventListener('click', function() {
        indiceActual = (indiceActual + 1) % cantidad;
        mostrarImagen(indiceActual);
    });

    // Botón de anterior
    botonPrev.addEventListener('click', function() {
        indiceActual = (indiceActual - 1 + cantidad) % cantidad;
        mostrarImagen(indiceActual);
    });

    // Avanzar automáticamente cada 3 segundos
    setInterval(function() {
        indiceActual = (indiceActual + 1) % cantidad;
        mostrarImagen(indiceActual);
    }, 3000);
}

// Inicializar cada carrusel
document.addEventListener('DOMContentLoaded', function() {
    crearCarrusel('carrusel1', 9); // Carrusel 1: 9 imágenes
    crearCarrusel('carrusel2', 4); // Carrusel 2: 4 imágenes
    crearCarrusel('carrusel3', 4); // Carrusel 3: 4 imágenes
});