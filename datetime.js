// script.js

function updateDateTime() {
  const now = new Date();

  // Giorno a due cifre
  const day = now.getDate().toString().padStart(2, '0');

  // Mese abbreviato in maiuscolo (es. NOV)
  const month = now.toLocaleString('en', { month: 'short' }).toUpperCase();

  // Anno a due cifre
  const year = now.getFullYear().toString().slice(-2);

  // Ore, minuti e secondi a due cifre
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Aggiorna il contenuto dell'elemento con id "datetime"
  document.getElementById('datetime').textContent =
    `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

// Aggiorna subito e poi ogni secondo
updateDateTime();
setInterval(updateDateTime, 1000);
