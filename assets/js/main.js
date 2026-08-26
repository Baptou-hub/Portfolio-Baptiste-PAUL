/* =====================================================================
   main.js — comportement partagé par toutes les pages du portfolio
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- Thème clair / sombre ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  // Le thème sombre est l'identité par défaut du site ; le mode clair
  // reste accessible via le bouton bascule (et mémorisé une fois choisi).
  const initialTheme = stored || "dark";
  if (initialTheme === "light") root.setAttribute("data-theme", "light");

  function toggleTheme() {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  /* ---------- Header : fond au scroll ---------- */
  const header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      const open = navLinks.classList.contains("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("is-open"))
    );
  }

  /* ---------- Révélation au scroll (discrète) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Marque active dans la nav ---------- */
  const sections = document.querySelectorAll("main [id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#'], .nav-links a[href*='#']");
  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    const navIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("is-active"));
            const match = Array.from(navAnchors).find((a) => a.getAttribute("href").endsWith("#" + entry.target.id));
            if (match) match.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => navIo.observe(s));
  }
})();
