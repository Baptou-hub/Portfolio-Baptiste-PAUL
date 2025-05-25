// Ouvre une fenêtre de terminal
function openTerminal() {
  const terminalOverlay = document.getElementById("terminal-overlay");
  terminalOverlay.classList.add("visible");
}

// Ferme la fenêtre de terminal
function closeTerminal() {
  const terminalOverlay = document.getElementById("terminal-overlay");
  terminalOverlay.classList.remove("visible");
}

// Gère l'entrée utilisateur dans la console
function handleCommand(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("console-input");
    const output = document.getElementById("console-output");
    const fileDisplay = document.getElementById("file-display");

    const command = input.value.trim().toLowerCase();
    input.value = "";

    // Affiche la commande dans la console
    const commandOutput = document.createElement("p");
    commandOutput.textContent = `> ${command}`;
    output.appendChild(commandOutput);

    // Commande pour ouvrir le terminal
    if (command === "invite") {
      openTerminal();
      const response = document.createElement("p");
      response.textContent = "Terminal ouvert.";
      output.appendChild(response);
    }
    // Commande pour afficher une image
    else if (command === "afficher image") {
      fileDisplay.innerHTML = '<img src="ton_image.png" alt="Image" style="max-width:100%; max-height:100%;">';
      const response = document.createElement("p");
      response.textContent = "Image affichée.";
      output.appendChild(response);
    }
    // Commande pour afficher un PDF
    else if (command === "afficher pdf") {
      fileDisplay.innerHTML = `<iframe src="CV.pdf" style="width:100%; height:100%; border:none;"></iframe>`;
      const response = document.createElement("p");
      response.textContent = "PDF affiché.";
      output.appendChild(response);
    }
    // Commande inconnue
    else if (command === "fermer") {
      closeTerminal();
      const response = document.createElement("p");
      response.textContent = "Terminal fermé.";
      output.appendChild(response);
    }
    else {
      const response = document.createElement("p");
      response.textContent = `Commande inconnue : ${command}`;
      output.appendChild(response);
    }

    // Défile vers le bas
    output.scrollTop = output.scrollHeight;
  }
}
