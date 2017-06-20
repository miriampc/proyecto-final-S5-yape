"use strict";
const RegisterNumber = (update)=> {
    console.log(state.nextPage);
    const containerRegister = $('<section class="container"></section>');
    const divInstructions = $(`<div class="instrucctions"><img src="img/icons/phone.png" alt=""></div>`);
    const title = $(`<h3>Para comenzar validemos tu número</h3>`);
    const description = $(`<p>Recibiras un SMS con un código de validación</p>`);
    const formVerfication = $('<form class="verification"></form>');
    const input = $(`<input id="text" type="number" pattern="^[0-9]{9}" placeholder="Ingresa tu número de celular" required>`);
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const label = $('<label for="terms">Acepto los <span>Términos y condiciones</span></label>');
    const button = $('<button type="submit" class="disabled" disabled>Continuar</button>');


    divInstructions.append(title);
    divInstructions.append(description);
    containerRegister.append(divInstructions);
    formVerfication.append(input);
    formVerfication.append(checkbox);
    formVerfication.append(button);

    containerRegister.append(divInstructions);
    containerRegister.append(formVerfication);

    checkbox.on('change', (e)=>{
        e.preventDefault();
        if(input.val() !="" && checkbox[0].checked) {
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