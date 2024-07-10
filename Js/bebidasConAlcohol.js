// Función para manejar las opciones de tamaños y precios para bebidas alcohólicas
function opcionesTamañosAlcohol(tipo) {
    switch (tipo) {
      case "Vino Tinto":
      case "Vino Blanco":
      case "Vino Rosado":
        return [
          { nombre: "Botella 750ml", precio: 8000 },
          { nombre: "Botella 1L", precio: 9500 },
        ];
      case "Lager":
      case "IPA":
      case "Stout":
      case "Pilsner":
      case "Porter":
      case "Wheat":
        return [
          { nombre: "Lata 355ml", precio: 4000 },
          { nombre: "Botella 500ml", precio: 4500 },
          { nombre: "Botella 1L", precio: 5500 },
        ];
      case "Fernet con Coca":
      case "Caipirinha":
      case "Mojito":
      case "Negroni":
      case "Margarita":
      case "Piña Colada":
      case "Campari con Naranja":
      case "Vermú":
      case "Gancia con Limón":
      case "Gin Tonic":
      case "Whisky Soda":
      case "Caipiroska":
      case "Moscow Mule":
      case "Daiquiri":
      case "Sour":
      case "Aperol Spritz":
      case "Americano":
      case "Sbagliato":
      case "Bellini":
      case "Mimosa":
        return [
          { nombre: "Vaso 300ml", precio: 4000 },
          { nombre: "Vaso 500ml", precio: 4850 },
        ];
      case "Brut":
      case "Demi-Sec":
      case "Rosé":
        return [
          { nombre: "Botella 750ml", precio: 10000 },
          { nombre: "Botella 1L", precio: 15000 },
        ];
      default:
        return [];
    }
}
