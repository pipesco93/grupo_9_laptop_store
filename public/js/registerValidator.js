window.addEventListener('load' , () => {

    let mail = document.getElementById('email')
    let password = document.getElementById('password')
    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')

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

        if(password.value.length == 0){
            arrayErrores.push('Se debe ingresar una contraseña');
        }

        if(nombre.value.length <= 2){
            arrayErrores.push('El mínimo para Nombre es de 2 caracteres');
        }

        if(apellido.value.length <= 2){
            arrayErrores.push('El mínimo para Apellido es de 2 caracteres');
        }

        let listaErrores = document.getElementById('lista-errores');
        
        if (arrayErrores.length >= 1){
           
           // event.preventDefault()
            
            arrayErrores.forEach((errores) => {
                listaErrores.innerHTML += `<li>${errores}</li>`
            })

        }else{
            form.submit()
        }
    })
})