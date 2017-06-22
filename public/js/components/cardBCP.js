"use strict";
const RegisterCard = (update)=> {
    const resource = resources.registerCard;
    const containerRegister = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const card = $(`<input id="card" type="number" pattern="[0-9]{16}" placeholder="Número de tarjeta" required>`);
    const icon = $(`<span class="icon"><img src="img/icons/card.png"></span>`);
    const divScan = $('<div class="box terms scan"></div>');
    const span =$('<span class="slash icon"><img src="img/icons/scan.png"> Escanear tarjeta</span>');
    const divDate = $('<div class="date"></div>');
    const label = $('<label for="month">Fecha de vencimiento</label>');
    const month = $(`<input id="month" type="number" placeholder="Mes" required>`);
    const backSlash = $(`<img src="img/icons/slash.png">`);
    const year = $(`<input id="year" type="number"  placeholder="Año" required>`);
    const button = $('<button id="sendCard" type="submit" class="disabled" disabled>Continuar</button>');


    divInput.append(card);
    divInput.append(icon);
    divScan.append(span);
    formVerfication.append(divInput);
    formVerfication.append(divScan);

    divDate.append(label);
    divDate.append(month);
    divDate.append(backSlash);
    divDate.append(year);
    formVerfication.append(divDate);
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

