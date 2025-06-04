export default function particles() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';

  const NUM_ESTRELLAS = 100;
  const VELOCIDAD = 300;

  let estrellas = [];

  for (let i = 0; i < NUM_ESTRELLAS; i++) {
    estrellas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radio: 1 + Math.random() * 2,
      dx: (Math.random() < 0.4 ? -1 : 1) * VELOCIDAD
    });
  }

  let ultimaActualizacion = performance.now();
  let animacionActiva = true;
  let animationFrameId;

  function animar(tiempoActual) {
    if (!animacionActiva) return;

    const delta = (tiempoActual - ultimaActualizacion) / 1000;
    ultimaActualizacion = tiempoActual;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let estrella of estrellas) {
      estrella.x += estrella.dx * delta;

      if (estrella.x < 0) {
        estrella.x = 0;
        estrella.dx *= -1;
      }
      if (estrella.x > canvas.width) {
        estrella.x = canvas.width;
        estrella.dx *= -1;
      }

      ctx.beginPath();
      ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animar);
  }

  // Función para pausar y reanudar según visibilidad
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      animacionActiva = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      animacionActiva = true;
      ultimaActualizacion = performance.now(); // Resetear el tiempo para evitar salto de frames
      animar(ultimaActualizacion);
    }
  });

  animar(performance.now());
}
