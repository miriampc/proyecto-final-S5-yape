"use strict";
const render = (root)=>{
    console.log(state.nextPage);
    root.empty();
    const section = $('<section class="components"></section>');
    if(state.nextPage == null){
        section.append(Portada(_=>render(root)));
    }else if(state.nextPage == 1){
        console.log("aki pag 1");
        section.append(RegisterNumber(_=>render(root)));
    }else if(state.nextPage == 2){
        console.log("aki pag 2");
        //section.append(RegisterNumber(_=>(root)));
    }else{
        console.log("aki pag ??");
    }
    root.append(section);
};
const state = {
    nextPage : null
}
$(_=>{
    $.get('http://localhost:3000/api/',(error, data)=>{
        state.user = data;
        console.log(data);
        const root =$('#root');
        render(root);
    });
})