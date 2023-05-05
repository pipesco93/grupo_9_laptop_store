window.addEventListener('load', function () {
    let nombreDeProducto = document.querySelector("#productName")
    let descripcion = document.querySelector("#productSpecs")
    let imagen = document.querySelector("#image")

    let formulario = document.querySelector("form")



    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let arrayErrores = []

        if (nombreDeProducto.value == "") {
            arrayErrores.push("Deberá tener al menos 5 caracteres")
        } else if (nombreDeProducto.value.length < 3) {
            arrayErrores.push("El campo de nombre debe tener al menos 5 caracteres");
        }

        if (descripcion.value == "") {
            arrayErrores.push("Deberá tener al menos 20 caracteres")
        } else if (descripcion.value.length < 8) {
            arrayErrores.push("El campo de descripcion debe tener al menos 20 caracteres");
        }

        if (image) {
            let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(image.value)) {
                arrayErrores.push('Ingresar foto en formato .jpg .jpeg .png');
            }
        }

        let listaErrores = document.getElementById('lista-errores');
        listaErrores.innerHTML = ""
        console.log(arrayErrores)
        if (arrayErrores.length >= 1) {

            arrayErrores.forEach((arrayErrores) => {

                listaErrores.innerHTML += `<li>${arrayErrores}</li>`
            })

        } else {
            formulario.submit()
        }

    })
})