// Función para manejar las opciones de tamaños y precios para bebidas sin alcohol
function opcionesTamañosSinAlcohol(tipo) {
    switch (tipo) {
      case "Coca-Cola Zero":
      case "Coca-Cola Light":
      case "Coca-Cola Común":
        return [
          { nombre: "Lata 355ml", precio: 4500 },
          { nombre: "Botella 500ml", precio: 7200 },
          { nombre: "Botella 1L", precio: 10800 },
        ];
  
      case "Spray Zero":
      case "Spray Común":
        return [
          { nombre: "Lata 355ml", precio: 4000 },
          { nombre: "Botella 500ml", precio: 7000 },
          { nombre: "Botella 1L", precio: 11000 },
        ];
  
      case "Manzana":
      case "Naranja":
      case "Pera":
      case "Limonada":
      case "Pomelo":
      case "Pomelo rosado":
      case "Uva":
      case "Multifruta":
        return [
          { nombre: "Botella 500ml", precio: 9000 },
          { nombre: "Botella 1L", precio: 16200 },
        ];
  
      case "Agua con Gas":
      case "Agua sin Gas":
        return {
          "Agua con Gas": [
            { nombre: "Botella 500ml", precio: 9000 },
            { nombre: "Botella 1L", precio: 16000 },
          ],
        };
      default:
        return [];
    }
  }
  
