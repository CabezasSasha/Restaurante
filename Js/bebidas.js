// Función para mostrar u ocultar las opciones de bebida
function mostrarBebida(idBebida) {
  var bebida = document.getElementById(idBebida);
  bebida.style.display = bebida.style.display === "block" ? "none" : "block";
}

// Función para actualizar los tamaños según el tipo de bebida seleccionado (compacta)
function actualizarTamaños(selectTipo, idSelectTamaño) {
  var tipo = selectTipo.value;
  var selectTamaño = document.getElementById(idSelectTamaño);
  var opciones = [];

  // Verifica si es bebida alcohólica o sin alcohol y obtiene las opciones de tamaños y precios
  if (opcionesTamañosAlcohol(tipo).length > 0) {
      opciones = opcionesTamañosAlcohol(tipo);
  } else {
      opciones = opcionesTamañosSinAlcohol(tipo);
  }

  // Actualiza el select de tamaños con las opciones obtenidas
  selectTamaño.innerHTML = '<option value="">Seleccione tamaño</option>';
  opciones.forEach(function(opcion) {
      var opt = document.createElement('option');
      opt.value = opcion.nombre;
      opt.textContent = opcion.nombre + ' - $' + opcion.precio + ' ARS';
      opt.dataset.price = opcion.precio;
      selectTamaño.appendChild(opt);
  });

  selectTamaño.disabled = opciones.length === 0;
  actualizarPrecio(selectTamaño);
}

// Función para actualizar el precio
function actualizarPrecio(tamanioSelect) {
  var precio = 0;
  var opcionSeleccionada = tamanioSelect.options[tamanioSelect.selectedIndex];
  if (opcionSeleccionada) {
      precio = parseInt(opcionSeleccionada.dataset.price) || 0;
  }
  var contenedor = tamanioSelect.closest('div');
  var precioElement = contenedor.querySelector('.precio');
  precioElement.textContent = precio;
  var boton = contenedor.querySelector('.botonDeMenu');
  boton.disabled = precio === 0;
  boton.dataset.price = precio;
}

// Función para deshabilitar opciones de bebidas sin alcohol
function deshabilitarSinAlcohol(select) {
  var bebidasSinAlcohol = document.querySelectorAll('#bebidasSinAlcohol select, #bebidasSinAlcohol button');
  bebidasSinAlcohol.forEach(function(element) {
      element.disabled = select.value !== '';
  });
}

// Función para deshabilitar opciones de bebidas con alcohol
function deshabilitarConAlcohol(select) {
  var bebidasConAlcohol = document.querySelectorAll('#bebidasConAlcohol select, #bebidasConAlcohol button');
  bebidasConAlcohol.forEach(function(element) {
      element.disabled = select.value !== '';
  });
}

// Función para mostrar u ocultar nota
function toggleVisibility() {
  var notas = document.querySelectorAll('.ParrafoDeNota');
  notas.forEach(function(nota) {
      nota.style.display = nota.style.display === 'block' ? 'none' : 'block';
  });
}

