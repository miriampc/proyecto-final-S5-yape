"use strict";
const KeyCard = (update)=> {
    const resource = resources.cardId;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const icon = $(`<span class="icon"><img src="img/icons/lock.png"></span>`);
    const keyCard = $(`<input id="card" type="number" pattern="[0-9]{4}" placeholder="Tu clave" required>`);
    const button = $('<button id="keycard" type="submit" class="disabled" disabled>REGISTRAR</button>');

    divInput.append(keyCard);
    divInput.append(icon);
    formVerfication.append(divInput);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description));
    containerRegister.append(formVerfication);

    keyCard.on('keypress keyup',_=>{
        if(keyCard.val().length == 4){
            enabledButton(button.attr('id'));
        }else {
            disabledButton(button.attr('id'));
        }
    });
    button.on('click',_=>{
        registerCard(state.phone,state.cardNumber,state.Month,state.Year,keycard.val())
            .then((data) => {
                state.userCode = data.code;
                state.phone = data.phone;
                state.nextPage = RegisterFinish;
                update();
            })
            .catch((err) => {
                button.after(`<p>${err}</p>`);
            });

    });

    return containerRegister;
}