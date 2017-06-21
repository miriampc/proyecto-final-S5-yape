"use strict";
const RegisterUser = (update)=> {
    const resource = resources.userRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const name = $(`<input id="text" type="number" placeholder="Nombre" required>`);
    const email = $(`<input id="email" type="number" placeholder="correo@ejemplo.com" required>`);
    const password = $(`<input id="password" type="number" pattern="[0-9]{6}" placeholder="Ingresa clave de 6 digitos" required>`);
    const button = $('<button id="create" type="submit" class="disabled" disabled>CREAR CUENTA</button>');

    formVerfication.append(name);
    formVerfication.append(email);
    formVerfication.append(password);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image, resource.title, resource.description));
    containerRegister.append(formVerfication);

    password.change(_=>{
        valida(password.val());
    });
    button.on('click',_=>{
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

function valida(pass){
    if(pass.length == 6) {
        $('#create').removeAttr('disabled');
    }else {
        $('#create').attr('disabled','disabled');
        valida(pass);
    }
}