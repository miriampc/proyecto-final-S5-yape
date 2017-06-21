"use strict";
const RegisterUser = (update)=> {
    const resource = resources.userRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const name = $(`<input id="text" type="tex" placeholder="Nombre" required>`);
    const email = $(`<input id="email" type="email" placeholder="correo@ejemplo.com" pattern="/([\^\@\s]+)@((?:[\-\a-z0-9]+\.)+[a-z]{2,})/" required>`);
    const password = $(`<input id="password" type="password" pattern="[0-9]{6}" placeholder="Ingresa clave de 6 digitos" required>`);
    const button = $('<button id="create" type="submit" class="disabled" disabled>CREAR CUENTA</button>');

    formVerfication.append(name);
    formVerfication.append(email);
    formVerfication.append(password);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image, resource.title, resource.description));
    containerRegister.append(formVerfication);

    password.change(_=>{
        valida(name.val(),email,password.val());
    });
    button.on('click',(e)=>{
        e.preventDefault();
        createUser(state.phone,name.val(),email.val(),password.val())
            .then((data) => {
                state.userCode = data.code;
                //state.phone = data.phone;
                console.log(state.phone);
                update();
            })
            .catch((err) => {
                button.after(`<p>${err}</p>`);
                update();
            });
    });


    return containerRegister;
};
const regexEmail = /([\^\@\s]+)@((?:[\-\a-z0-9]+\.)+[a-z]{2,})/;

function valida(name,email,pass){
    console.log(email[0].getAttribute("required"));
    if(name.trim()!="" && regexEmail.test(email[0].val()) && pass.length == 6){
        $('#create').removeAttr('disabled');
    }else {
        $('#create').attr('disabled','disabled');
        //valida(name,email,pass);
    }
}
