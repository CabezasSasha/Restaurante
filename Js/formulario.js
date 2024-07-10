document.getElementById('nombre').addEventListener('input', function (event) {
    var input = event.target;
    var value = input.value;
    var pattern = /^[A-Za-zÀ-ÿ\s]+$/;

    if (!pattern.test(value)) {
        input.setCustomValidity('Por favor, ingrese solo letras y espacios.');
    } else {
        input.setCustomValidity('');
    }
});

