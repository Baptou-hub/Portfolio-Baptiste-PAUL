/* =====================================================================
   network-bg.js — fond animé "réseau de nœuds", mouvement lent et discret.
   Se met en pause automatiquement si l'utilisateur préfère moins
   d'animations (accessibilité), et si l'onglet n'est pas visible.
   ===================================================================== */

(function () {
  "use strict";
  const canvas = document.getElementById("network-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let width, height, dpr;
  let nodes = [];
  let raf = null;
  let running = true;

  const NODE_COUNT_DIVISOR = 16000; // moins de nœuds sur petit écran
  const LINK_DIST = 150;
  const SPEED = 0.12; // mouvement volontairement lent ("tranquille")

  function getAccentColor() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    return isLight ? "29, 111, 224" : "58, 166, 255";
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(80, Math.max(24, Math.floor((width * height) / NODE_COUNT_DIVISOR)));
    nodes = new Array(count).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1 + Math.random() * 1.6,
    }));
  }

  function step() {
    if (!running) return;
    const accent = getAccentColor();
    ctx.clearRect(0, 0, width, height);

    // liens
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.35;
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // nœuds
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${accent}, 0.75)`;
      ctx.fill();
    });

    raf = requestAnimationFrame(step);
  }

  function start() {
    if (raf) return;
    running = true;
    raf = requestAnimationFrame(step);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }

  resize();
  if (reduceMotion) {
    step();
    running = false;
  } else {
    start();
  }

  window.addEventListener("resize", () => {
    resize();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (!reduceMotion) start();
  });
})();
