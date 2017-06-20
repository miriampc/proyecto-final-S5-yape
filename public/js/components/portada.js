"use strict";
const Portada = (update)=>{
    const containerRegister = $('<section class="container"></section>');
    const slide = $(`<div class="slideImg"><img src="img/icons/icon-people.png" alt=""></div>`);
    const title = $(`<h1>Paga a tus amigos</h1>`);
    const description = $(`<p>paga a quien quieras desde donde quieras</p>`);
    const button = $('<button>Registrarme</button>');

    button.on('click',()=>{
        state.currentPage=1;
        update();
    });

    slide.append(title);
    slide.append(description);
    containerRegister.append(slide);
    containerRegister.append(button);
    return containerRegister;
};