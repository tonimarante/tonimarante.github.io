window.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var resultsContainer = document.getElementById('results');

  searchInput.addEventListener('input', function() {
    var searchQuery = searchInput.value.toLowerCase();
    var results = [];

    // Realizar la búsqueda en tu contenido
    // Puedes utilizar JavaScript para buscar en el DOM o en una fuente de datos externa

    // Ejemplo de búsqueda en el DOM
    var items = document.getElementsByTagName('h1'); // Buscar en los títulos h1

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemText = item.textContent.toLowerCase();

      if (itemText.includes(searchQuery)) {
        results.push('<li>' + itemText + '</li>');
      }
    }

    // Actualizar los resultados
    resultsContainer.innerHTML = results.join('');
  });
});

