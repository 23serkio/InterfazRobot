// Detectar teclas del teclado
document.addEventListener('keydown', (event) => {
    const keyDisplay = document.getElementById('key-pressed');
    keyDisplay.textContent = `Tecla: ${event.key}`;
});

// Manejo de botones
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const statusDisplay = document.getElementById('status');

startButton.addEventListener('click', () => {
    statusDisplay.textContent = 'Estado: Iniciado';
    statusDisplay.style.color = 'green';
});

stopButton.addEventListener('click', () => {
    statusDisplay.textContent = 'Estado: Detenido';
    statusDisplay.style.color = 'red';
});

// Slider para simular ajuste de altura
const heightSlider = document.getElementById('height-slider');
heightSlider.addEventListener('input', (event) => {
    const value = event.target.value;
    statusDisplay.textContent = `Altura ajustada a: ${value}%`;
    statusDisplay.style.color = 'yellow';
});
