// Seleccionamos todos los elementos con la clase 'animar'
const elementosAnimados = document.querySelectorAll('.main .contenido_skills');

// Función que revisa si un elemento es visible en la pantalla
function mostrarAlScroll() {
  const alturaVentana = window.innerHeight; // Altura de la ventana del navegador
  
  elementosAnimados.forEach(elemento => {
    // Obtenemos la posición superior del elemento
    const posicionSuperior = elemento.getBoundingClientRect().top;
    
    // Si el elemento está dentro del área visible, le agregamos la clase 'mostrar'
    // El '150' es un margen para que la animación comience un poco antes
    if (posicionSuperior < alturaVentana - 150) {
      elemento.classList.add('mostrar');
    }
  });
}

// Ejecutamos la función al cargar la página y al hacer scroll
window.addEventListener('scroll', mostrarAlScroll);
window.addEventListener('load', mostrarAlScroll);