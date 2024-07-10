// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, 
        wrap: true 
    });
});


let carrito = [];

function agregarAlCarrito(producto, precio) {
    const productoExistente = carrito.find(item => item.producto === producto);

    if (productoExistente) {
        productoExistente.cantidad++;
        productoExistente.total += precio;
    } else {
        carrito.push({
            producto: producto,
            precio: precio,
            cantidad: 1,
            total: precio
        });
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = '';

    let totalCarrito = 0;

    carrito.forEach(item => {
        totalCarrito += item.total;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.producto}</td>
            <td>$${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>$${item.total}</td>
        `;
        carritoItems.appendChild(row);
    });

    document.getElementById('total-carrito').textContent = totalCarrito;
}

