const RegisterFinish = (update)=> {
    const resource = resources.face;
    const container = $('<section class=""></section>');
    const section = $('<section class="happy-face"></section>');
    const form = $('<form class="form-send flex"></form>');
    const divMov = $('<div class="box send"></div>');
    const h4 =$('<h4>ÚLTIMOS MOVIMIENTOS</h4>');
    const icon = $(`<span id="sendMov" class="icon"><img src="img/icons/right-arrow-circular-button.png"></span>`);
    const divContent = $('<div class="div-content flex"></div>');
    const divImg = $('<div class="content-img"><img src="img/icons/icon.png"></div>');
    const divText= $(`<div class="content-text">
                        <h4>¿Aun no realizas tu primer pago?</h4>
                        <p>Es rapido y sencillo</p>
                       </div>`);

    const divSend = $(`<div class="div-content flex">
                        <div class="items flex"><img src="img/icons/send.png">
                            <p>ENVIAR PAGO</p>
                        </div>
                        <div class="items flex"><img src="img/icons/code-qr.png">
                            <p>RECIBIR PAGO</p>
                        </div>
                    </div>`);

    section.append(Instructions(resource.image,resource.title,resource.description));
    container.append(section);
    divMov.append(h4);
    divMov.append(icon);
    form.append(divMov);
    divContent.append(divImg);
    divContent.append(divText);
    form.append(divContent);
    form.append(divSend);
    container.append(form);

    return container;
};