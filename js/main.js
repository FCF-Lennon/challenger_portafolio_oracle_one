

// Obtener todos los contenedores de input y textarea
const inputContainers = document.querySelectorAll('.input__container');

// Añadir eventos a cada input y textarea
inputContainers.forEach(container => {
    const input = container.querySelector('.contacto__item-input, .contacto__item-textarea');
    const placeholder = container.querySelector('.contacto__item-input-placeholder, .contacto__item-textarea-placeholder');

    // Función para mover el placeholder
    function handleFocus() {
        placeholder.style.top = '8px'; // Mueve el placeholder hacia arriba manteniendo 4px de separación
        placeholder.style.color = '#2A7AE4'; // Cambia el color al enfocar
        placeholder.style.fontSize = '12px';
        input.style.borderBottom = '4px solid #2A7AE4';
        
    }

    // Función para devolver el placeholder a su posición original
    function handleBlur() {
        if (!input.value) { // Si el input está vacío
            placeholder.style.top = '20px'; // Regresa el placeholder a su posición original
            placeholder.style.color = '#A2A2A2'; // Restaura el color original
            placeholder.style.fontSize = '16px';
            input.style.borderBottom = '0px';
        } else {
            input.style.borderBottom = '4px solid #C8C8C8'; // cambia el color del borde sin focus
            placeholder.style.color = '#A2A2A2';
        }

    }

    // Añadir eventos de enfoque y desenfoque al input y textarea
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
});

