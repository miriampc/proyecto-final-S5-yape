"use strict";
const Portada = (update)=>{
    const containerPortada = $('<section class="container"></section>');
    const slide = $(`<div class="slideImg"><img src="img/icons/icon-people.png" alt=""></div>`);
    const title = $(`<h1>Paga a tus amigos</h1>`);
    const description = $(`<p>paga a quien quieras desde donde quieras</p>`);
    const button = $('<button>Registrarme</button>');


    slide.append(title);
    slide.append(description);
    containerPortada.append(slide);
    containerPortada.append(button);

    button.on('click',_=>{
        state.nextPage = 1;
        update();
    });

    return containerPortada;
};