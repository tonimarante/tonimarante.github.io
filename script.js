const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Agrega un evento de escucha al campo de entrada para que se active cuando se escriba algo
searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  // Limpia los resultados de la búsqueda anteriores
  searchResults.innerHTML = '';

  // Realiza una búsqueda en la API de GitHub
  fetch('https://api.github.com/search/code?q=' + searchText)
    .then(response => response.json())
    .then(data => {
      // Itera sobre los resultados y crea elementos de lista para mostrarlos
      data.items.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.html_url;
        link.textContent = item.name;
        li.appendChild(link);
        searchResults.appendChild(li);
      });
    });
});








