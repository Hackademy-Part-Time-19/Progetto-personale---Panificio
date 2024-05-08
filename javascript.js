
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // Salva la preferenza dell'utente sul tema
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
});

// Verifica se l'utente ha già scelto un tema prima
const isDarkTheme = localStorage.getItem('darkTheme') === 'true';

if (isDarkTheme) {
  document.body.classList.add('dark-theme');
}

document.getElementById('toggleButton').addEventListener('click', function() {
    var button = document.getElementById('toggleButton');
    if (button.style.backgroundColor === 'black') {
        button.style.backgroundColor = 'initial'; // Cambia il colore di sfondo al valore iniziale
    } else {
        button.style.backgroundColor = 'black'; // Cambia il colore di sfondo in nero
    }
});

document.querySelectorAll('.animated-text-strip').forEach(function(element) {
    element.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});







    



