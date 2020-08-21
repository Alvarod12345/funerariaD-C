console.log('funka el contact us')
$(document).ready(function () {
    $('.enviar').click(function (event) {
        
        console.log('clicked enviar')

        var nombre = $('.nombre').val()
        var email = $('.email').val()
        var celular = $('.celular').val()
        var texto = $('.texto').val()
        var errormsg = document.getElementById("errormessage");
        var text;

        errormsg.style.padding = "5px"

        // console.log(nombre)
        // console.log(email)
        // console.log(celular)
        // console.log(texto)

        // valida nombre 
        if(!nombre.length){
            event.preventDefault()
            text = "Por favor ingrese su nombre"
            errormsg.innerHTML = text;
            console.log('nombre invalid')
            return false;
        }
        
        // valida email
        // if(email.length < 5 && email.includes('@') && email.includes('.')){
        //     event.preventDefault()
        //     text = "Ingrese su correo"
        //     errormsg.innerHTML = text;
        //     console.log('email valid')
        // }
        if(email.indexOf("@") == -1 || email.length < 5){
            event.preventDefault()
            text = "Por favor ingrese un correo valido"
            errormsg.innerHTML = text;
            // console.log('email invalid')
            return false;
        }
        
        // else{
        //     console.log('email invalid')
        // }
        
        // vlaida texto
         if(texto.length < 1){  
            event.preventDefault()
            text = "Por favor ingrese un mensaje"
            errormsg.innerHTML = text;
            // console.log('texto invalid')
            return false;
        }
        // valida celular
        if(celular.length != 9 ){
            event.preventDefault()
            text = "Por favor ingrese 9 digitos"
            errormsg.innerHTML = text;
            // console.log('celular invalid')
            return false;
        }
        // else{
        //     console.log('celular invalid')
        // }
        // console.log('digitos celular:', celular.length)
        
        // else{
        //     console.log('texto valid')
        // }
        return true;
        // function validation(){
        //     alert('funka la validacion');
        // }
    })
}) 