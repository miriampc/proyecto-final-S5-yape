const RegisterNumber = (update)=> {
    const containerRegister = $('<section class="container bg-yellow"></section>');
    const divMessage = $(`<div><img src="img/icons/check.png" alt="">
                          <p>¡Bien!</p><p></p>Ahora puedes usar Yape</p></div>`);
    containerRegister.append(divMessage);

    setTimeout(_={},3000)
    return containerRegister;
}