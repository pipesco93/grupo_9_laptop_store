window.addEventListener('load' , () => {

    let mail = document.getElementById('email-reg');
    let password = document.getElementById('password');
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let fileInput = document.getElementById('avatar');
    let form = document.querySelector('form');

    form.addEventListener('submit', (event) => {

        event.preventDefault()


        let arrayErrores = []

        if(mail.value.length == 0){
            arrayErrores.push('Se debe ingresar un email');
        }

        const isEmail = String(mail.value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if(! isEmail){
        arrayErrores.push('Email invalido');
        }

        if(password.value.length < 8){
            arrayErrores.push('Se debe ingresar una contraseña de almenos 8 caracteres');
        }

        if(nombre.value.length <= 2){
            arrayErrores.push('El mínimo para Nombre es de 2 caracteres');
        }

        if(apellido.value.length <= 2){
            arrayErrores.push('El mínimo para Apellido es de 2 caracteres');
        }

        let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(fileInput.value)) {
            arrayErrores.push('Ingresar foto en formato .jpg .jpeg .png');
        }


        let listaErrores = document.getElementById('lista-errores');
        listaErrores.innerHTML = ""
        if (arrayErrores.length >= 1){

           // event.preventDefault()
            arrayErrores.forEach((errores) => {
                listaErrores.innerHTML += `<li>${errores}</li>`
            })
            arrayErrores = []

        }else{
            form.submit()
        }
    })
})