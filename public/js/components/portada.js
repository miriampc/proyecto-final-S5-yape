"use strict";
const Portada = (update)=>{
    const containerPortada = $('<section class="container"></section>');

    const button = $('<button>Registrarme</button>');

    containerPortada.append(carousel());
    containerPortada.append(button);

    button.on('click',_=>{
        state.nextPage = 1;
        update();
    });



    return containerPortada;
};
