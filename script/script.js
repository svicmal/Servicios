

document.addEventListener('DOMContentLoaded', function generarParcela() {
    const ancho = parseInt(document.getElementById('ancho').value, 10);
    const alto = parseInt(document.getElementById('alto').value, 10);

    const tabla = document.createElement('table');
    const cuerpoTabla = document.createElement('tbody');

    for (let i = 1; i <= alto; i++) {
        const fila = document.createElement('tr');
        for (let j = 1; j <= ancho; j++) {
            const celda = document.createElement('td');
            celda.textContent = "";  // Deja las celdas vacías
            celda.style.backgroundColor = 'green';  // Establece el color por defecto a verde
            celda.addEventListener('click', function() {
                cambiarColorCelda(celda);
            });
            fila.appendChild(celda);
        }
        cuerpoTabla.appendChild(fila);
    }

    tabla.appendChild(cuerpoTabla);

    const tablaContainer = document.getElementById('tablaContainer');
    tablaContainer.innerHTML = ''; // Limpia el contenedor antes de agregar la nueva tabla
    tablaContainer.appendChild(tabla);
}
// Intentar que vuelva a cambiar y poder mover muebles y demás
function cambiarColorCelda(celda) {
    // Cambia el color de fondo de la celda a azul
    celda.style.backgroundColor = 'blue';
})