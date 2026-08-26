/* =====================================================================
   projet-render.js — lit l'id du projet dans l'URL (?id=...) et
   remplit le gabarit projet.html à partir de PROJETS (projets-data.js)
   ===================================================================== */

(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const projet = (typeof PROJETS !== "undefined" && id) ? PROJETS[id] : null;

  function fillList(ulId, items) {
    const ul = document.getElementById(ulId);
    if (!ul) return;
    ul.innerHTML = (items || []).map((it) => `<li>${it}</li>`).join("");
  }
  function fillTags(elId, items) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = (items || []).map((it) => `<span class="tag">${it}</span>`).join("");
  }

  if (!projet) {
    document.querySelector("main .container").innerHTML =
      '<p style="padding:120px 0 60px;">Projet introuvable. <a href="index.html#projets" style="color:var(--accent);">Retour aux projets</a>.</p>';
    return;
  }

  document.title = projet.title + " — Baptiste Paul";
  document.getElementById("p-kicker").textContent = projet.kicker;
  document.getElementById("p-title").textContent = projet.title;
  document.getElementById("p-subtitle").textContent = projet.subtitle;
  document.getElementById("p-cover").src = projet.cover;
  document.getElementById("p-cover").alt = projet.title;
  document.getElementById("p-contexte").textContent = projet.contexte;
  document.getElementById("p-apports").textContent = projet.apports;
  document.getElementById("p-nr").textContent = projet.numeriqueResponsable;
  document.getElementById("p-conclusion").textContent = projet.conclusion;
  document.getElementById("p-period").textContent = projet.period;
  document.getElementById("p-org").textContent = projet.org;

  fillTags("p-tags", projet.tags);
  fillList("p-objectifs", projet.objectifs);
  fillList("p-missions", projet.missions);
  fillList("p-etapes", projet.etapes);
  fillTags("p-outils", projet.outils);
  fillTags("p-comp-tech", projet.competences && projet.competences.techniques);
  fillTags("p-comp-trans", projet.competences && projet.competences.transversales);
  fillTags("p-comp-human", projet.competences && projet.competences.humaines);

  const gallery = document.getElementById("p-gallery");
  gallery.innerHTML = (projet.gallery || [])
    .map((g) => `<img src="${g.src}" alt="${g.alt}" loading="lazy">`)
    .join("");

  const lienBtn = document.getElementById("p-lien");
  const lienNote = document.getElementById("p-lien-note");
  if (projet.lien) {
    lienBtn.href = projet.lien;
  } else {
    lienBtn.style.display = "none";
    if (projet.lienNote) {
      lienNote.textContent = projet.lienNote;
      lienNote.style.display = "block";
    }
  }

  if (projet.isPlaceholder) {
    document.getElementById("p-placeholder-note").style.display = "block";
  }
})();
