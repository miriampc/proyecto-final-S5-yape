"use strict";
const KeyCard = (update)=> {
    const resource = resources.cardId;
    const containerRegister = $('<section class="container"></section>');
    const span =$('<span>****1234</span>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const keyCard = $(`<input id="card" type="number" pattern="[0-9]{9}" placeholder="Ingresa tu número de celular" required>`);

    const button = $('<button type="submit" class="disabled" disabled>REGISTRAR</button>');

    formVerfication.append(keyCard);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description));
    containerRegister.append(span);
    containerRegister.append(formVerfication);

    button.on('click',_=>{

    });

    return containerRegister;
}