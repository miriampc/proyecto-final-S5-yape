"use strict";
const RegisterNumber = (update)=> {
    const resource = resources.phoneRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const input = $(`<input id="phone" type="number" pattern="[0-9]{9}" placeholder="Número de celular" required>`);
    const icon = $(`<span class="icon cel"><img src="img/icons/phoneandnumber.png"></span>`);
    const divCheck = $('<div class="terms"></div>');
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const span = $(`<span></span>`);
    const label = $('<label for="terms">Acepto los <span>Términos y condiciones</span></label>');
    const button = $('<button id="register" type="submit" class="disabled" disabled>Continuar</button>');

    divInput.append(input);
    divInput.append(icon);
    divCheck.append(checkbox);
    divCheck.append(label);
    formVerfication.append(span);
    formVerfication.append(divInput);
    formVerfication.append(divCheck);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description));
    containerRegister.append(formVerfication);

    input.on('keyup keypress',(e)=>{
        if(input.val().length == 9 && checkbox.prop('checked')) {
            enabledButton(button.attr('id'));
        }else {
            disabledButton(button.attr('id'));
        }
    });

    checkbox.on('change', (e)=>{
        e.preventDefault();
        if(input.val().length == 9 && checkbox.prop('checked')) {
            enabledButton(button.attr('id'));
        }else {
            disabledButton(button.attr('id'));
        }
    });


    button.on('click',(e)=>{
        e.preventDefault();
        registerPhoneNumber(input.val(),checkbox[0].checked)
            .then((data) => {
                state.userCode = data.code;
                state.phone = data.phone;
                update();
            })
            .catch((err) => {
                span.empty();
                span.text(err);
                input.val('');
            });
    });

    return containerRegister;
};
