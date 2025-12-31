// ===== RECURSO 2: CAMPO DE TEXTO INTERACTIVO =====
// Este script permite al usuario personalizar el saludo con su nombre

/**
 * Función que actualiza el nombre mostrado en el saludo
 * Toma el valor del input y lo muestra en el elemento userName
 */
function updateName() {
    const nameInput = document.getElementById('nameInput');
    const userName = document.getElementById('userName');
    const newName = nameInput.value.trim();
    
    // Solo actualizar si el usuario escribió algo
    if (newName !== '') {
        userName.textContent = newName;
        nameInput.value = ''; // Limpiar el campo después de actualizar
    }
}

// Permitir actualizar el nombre presionando Enter
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateName();
    }
});
