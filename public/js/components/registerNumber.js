"use strict";
const RegisterNumber = (update)=> {
    const data = resources.phoneRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="verification"></form>');
    const input = $(`<input id="text" type="number" pattern="^[0-9]{9}" placeholder="Ingresa tu número de celular" required>`);
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const label = $('<label for="terms">Acepto los <span>Términos y condiciones</span></label>');
    const button = $('<button type="submit" class="disabled" disabled>Continuar</button>');


    formVerfication.append(input);
    formVerfication.append(checkbox);
    formVerfication.append(label);
    formVerfication.append(button);
    containerRegister.append(Instructions(data.image,data.title,data.description));
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

    button.on('click',_=>{
        state.nextPage = 2;
        registerNumberPost(input.val(),checkbox[0].checked);
        update();
    });

    return containerRegister;
};