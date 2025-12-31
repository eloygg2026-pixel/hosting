// ===== RECURSO 3: OBJETO EN MOVIMIENTO =====
// Este script crea una animación de una bola que rebota por la pantalla

const ball = document.getElementById('movingBall');

// Posición inicial de la bola
let ballX = 50;
let ballY = 50;

// Velocidad de movimiento (píxeles por frame)
let ballVelocityX = 2;
let ballVelocityY = 1.5;

/**
 * Función principal que mueve la bola
 * Se ejecuta continuamente usando requestAnimationFrame
 */
function moveBall() {
    // Calcular los límites de la pantalla (menos el tamaño de la bola)
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;

    // Actualizar posición
    ballX += ballVelocityX;
    ballY += ballVelocityY;

    // Detectar colisión con bordes horizontales y rebotar
    if (ballX <= 0 || ballX >= maxX) {
        ballVelocityX = -ballVelocityX; // Invertir dirección horizontal
        ballX = ballX <= 0 ? 0 : maxX;   // Ajustar posición al borde
    }

    // Detectar colisión con bordes verticales y rebotar
    if (ballY <= 0 || ballY >= maxY) {
        ballVelocityY = -ballVelocityY; // Invertir dirección vertical
        ballY = ballY <= 0 ? 0 : maxY;   // Ajustar posición al borde
    }

    // Aplicar la nueva posición a la bola
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // Continuar la animación en el siguiente frame
    requestAnimationFrame(moveBall);
}

// Iniciar la animación cuando se carga la página
moveBall();

// Ajustar posición de la bola si se cambia el tamaño de la ventana
window.addEventListener('resize', function() {
    ballX = Math.min(ballX, window.innerWidth - 60);
    ballY = Math.min(ballY, window.innerHeight - 60);
});
