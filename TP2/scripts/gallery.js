// ===== RECURSO 1: INTERCAMBIO DE IMÁGENES =====
// Este script maneja la galería interactiva de imágenes

let currentImageIndex = 0;
const images = document.querySelectorAll('#imageGallery img');
const imageCounter = document.getElementById('imageNumber');

/**
 * Función que cambia a la siguiente imagen en la galería
 * Se activa cuando el usuario hace clic en la imagen
 */
function changeImage() {
    // Remover la clase 'active' de la imagen actual
    images[currentImageIndex].classList.remove('active');
    
    // Calcular el índice de la siguiente imagen (vuelve a 0 después de la última)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Añadir la clase 'active' a la nueva imagen
    images[currentImageIndex].classList.add('active');
    
    // Actualizar el contador visual
    imageCounter.textContent = currentImageIndex + 1;
}
