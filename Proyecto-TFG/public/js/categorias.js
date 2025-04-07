// categorias.js
fetch('http://127.0.0.1:8000/api/categorias/')
  .then(response => response.json())
  .then(data => {
    console.log('Datos obtenidos:', data);
    // Pasa los datos a Clojure (Reagent) usando un objeto global
    window.categoriasData = data;
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });
