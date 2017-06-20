const Instructions = (image,tittle,description)=>{
    "use strict";
    const divInstructions = $(`<div class="instructions"><img src="img/icons/${image}" alt=""></div>`);
    const h3 = $(`<h3>${tittle}</h3>`);
    const p = $(`<p>${description}</p>`);
    divInstructions.append(h3);
    divInstructions.append(p);
    return divInstructions;
}