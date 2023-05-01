window.addEventListener('load', () => {

    let productName = document.getElementById('productName')
    let specs = document.getElementById('productSpecs')
    let image = document.getElementById('image')
    let form = document.querySelector('form')


    form.addEventListener('submit', (event) => {

        event.preventDefault()


        let arrayErrores = []

        if (productName.value.length == 0) {
            arrayErrores.push('Se debe ingresar una referencia del  producto');
        }

        if (productName.value.length < 5) {
            arrayErrores.push('La referencia debe tener al menos 5 caracteres ');
        }


        if (specs.value.length == 0) {
            arrayErrores.push('Se debe ingresar una descripción');
        }

        if (specs.value.length < 20) {
            arrayErrores.push('La descripcion debe tener al menos 20 caracteres');
        }

        if (image) {
            let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(image.value)) {
                arrayErrores.push('Ingresar foto en formato .jpg .jpeg .png');
            }
        }


        let listaErrores = document.getElementById('lista-errores');

        if (arrayErrores.length >= 1) {

            // event.preventDefault()

            arrayErrores.forEach((errores) => {
                listaErrores.innerHTML += `<li>${errores}</li>`
            })

        } else {
            form.submit()
        }

    })

})