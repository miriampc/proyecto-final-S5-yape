"use strict";
const RegisterCard = (update)=> {
    const resource = resources.registerCard;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const card = $(`<input id="card" type="number" pattern="[0-9]{16}" placeholder="Ingresa tu número de celular" required>`);
    const span =$('<span>Escanear tarjeta</span>');
    const label = $('<label for="terms">Fecha de vencimiento</label>');
    const month = $(`<input id="month" type="number" placeholder="Mes" required>`);
    const year = $(`<input id="year" type="number"  placeholder="Año" required>`);
    const button = $('<button id="sendCard" type="submit" class="disabled" disabled>Continuar</button>');

    formVerfication.append(card);
    formVerfication.append(month);
    formVerfication.append(year);
    formVerfication.append(button);
    containerRegister.append(Instructions(resource.image,resource.title,resource.description));
    containerRegister.append(formVerfication);

    card.on('keyup',(e)=>{
        console.log(card.val().length);
        if(e.which>47 && e.which<58 && card.val().length==16){
            enabledButton(button.attr('id'));
        }else {
            disabledButton(button.attr('id'));
        }
    });
    button.on('click',_=>{
        state.nextPage = KeyCard;
        update();

    });

    return containerRegister;
};

