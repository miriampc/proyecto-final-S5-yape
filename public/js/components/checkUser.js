const CheckUser = (update)=> {
    const containerRegister = $('<section class="container flex bg-yellow"></section>');
    const divMessage = $(`<div><img src="img/icons/check.png" alt="">
                              <h4>¡Bien!</h4>
                              <h4>Ahora puedes usar Yape</h4>
                          </div>`);
    containerRegister.append(divMessage);

    setTimeout(_={},3000)
    return containerRegister;
}