window.addEventListener('load', () => {

    let contraseña = document.getElementById('clave')
    let mail = document.getElementById('email')
    let form = document.querySelector('form')


    form.addEventListener('submit', (event) => {

        event.preventDefault()


        let arrayErrores = []

        if (mail.value.length == 0) {
            arrayErrores.push('Se debe ingresar un email');
        }

        const isEmail = String(mail.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        if (!isEmail) {
            arrayErrores.push('Email invalido');
        }


        if (contraseña.value.length == 0) {
            arrayErrores.push('Se debe ingresar una contraseña');
        }

        let listaErrores = document.getElementById('lista-errores');
        listaErrores.innerHTML = ""
        if (arrayErrores.length >= 1) {

            // event.preventDefault()

            arrayErrores.forEach((errores) => {
                //listaErrores.innerHTML = "<li></li>"
                listaErrores.innerHTML += `<li>${errores}</li>`
            })

        } else {
            form.submit()
        }

    })

})