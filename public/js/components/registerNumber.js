"use strict";
const RegisterNumber = (update)=> {
    const resource = resources.phoneRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const input = $(`<input id="text" type="number" pattern="^[0-9]{9}" placeholder="Ingresa tu número de celular" required>`);
    const divCheck = $('<div></div>');
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const label = $('<label for="terms">Acepto los <span>Términos y condiciones</span></label>');
    const button = $('<button type="submit" class="disabled" disabled>Continuar</button>');


    formVerfication.append(input);
    divCheck.append(checkbox);
    divCheck.append(label);
    formVerfication.append(divCheck);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description));
    containerRegister.append(formVerfication);

    checkbox.on('change', (e)=>{
        e.preventDefault();
        if(input.val().length == 9 && checkbox[0].checked) {
            button.removeAttr('disabled');
            console.log(checkbox[0].checked);
        }else {
            console.log(checkbox[0].checked);
            button.attr('disabled','disabled');
        }
    });

    button.on('click',(e)=>{
        e.preventDefault();
        registerPhoneNumber(input.val(),checkbox[0].checked)
            .then((data) => {
                state.userCode = data.code;
                state.phone = data.phone;
                console.log(state.phone);
                update();
            })
            .catch((err) => {
                input.after(`<p>${err}</p>`);
                update();
            });
    });

    return containerRegister;
};