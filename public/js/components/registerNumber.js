"use strict";
const RegisterNumber = (update)=> {
    const resource = resources.phoneRegister;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const input = $(`<input id="phone" type="text" maxlength="9" placeholder="Número de celular" required>`);
    const icon = $(`<span class="icon cel"><img src="img/icons/phoneandnumber.png"></span>`);
    const divCheck = $('<div class="terms"></div>');
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const span = $(`<span></span>`);
    const label = $('<label for="terms">Acepto los <span>Términos y condiciones</span></label>');
    const button = $('<button id="btnSend" type="submit" disabled>Continuar</button>');

    divInput.append(input);
    divInput.append(icon);
    divCheck.append(checkbox);
    divCheck.append(label);
    formVerfication.append(divInput);
    formVerfication.append(span);
    formVerfication.append(divCheck);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description,""));
    containerRegister.append(formVerfication);


    input.on('keydown',(e)=>{
        if( e.keyCode > 47 && e.keyCode < 58 ||  e.keyCode === 8){
            span.empty();
        }
        else {
            span.text('Solo números, inicia con 9');
            return false;
        }
    });

    input.on('keyup keypress',(e)=>{
        verifyRegisterNumber(input.val(),checkbox,button);
    });

    checkbox.on('change', (e)=>{
        verifyRegisterNumber(input.val(),checkbox,button);
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
