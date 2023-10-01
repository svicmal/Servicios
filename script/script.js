document.addEventListener('click',function(){
    const ancho = document.getElementById('ancho')
    const largo = document.getElementById('alto')

    const tabla = document.createElement('table');
    const cuerpoTabla = document.createElement('tbody');
    for (let i = 1; i <= ancho; i++) {
        const fila = document.createElement('tr');
        for (let j = 1; j <= largo; j++) {
            const celda = document.createElement('td');
            celda.textContent = 0;  // Puedes cambiar esto según tus necesidades
            fila.appendChild(celda);
        }
        cuerpoTabla.appendChild(fila);
    }
    tabla.appendChild(cuerpoTabla);
})