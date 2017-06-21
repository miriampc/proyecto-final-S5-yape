"use strict";
const Portada = (update)=>{
    const containerPortada = $('<section class="container"></section>');
    console.log($('.owl-carousel'));
    slide();
    const divCarousel=$('<div class="owl-carousel owl-theme"></div>');
    console.log($('.owl-carousel'));
    const item1 = $(`<div class="item"><img src="img/icons/icon-people.png" alt="icon people"><h1>Paga a tus amigos</h1><p>Paga a quien quieras desde donde quieras</p></div>`);
    const item2 = $(`<div class="item"><img src="img/icons/happy-person.png" alt="happy person"><h1>Sin número de cuenta</h1><p>Elige a quien pagar desde tu lista de contactos</p></div>`);
    const item3 = $(`<div class="item"><img src="img/icons/group-people.png" alt=" group people"><h1>Gratis y seguro</h1><p>La transferencia es inmediata y gratuita de una cuenta a otra</p></div>`);

    const button = $('<button>Registrarme</button>');

    divCarousel.append(item1);
    divCarousel.append(item2);
    divCarousel.append(item3);


    containerPortada.append(divCarousel);
    containerPortada.append(button);

    button.on('click',_=>{
        state.nextPage = 1;
        update();
    });



    return containerPortada;
};
