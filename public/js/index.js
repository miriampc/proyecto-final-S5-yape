"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    if(state.nextPage == null){
        section.append(Portada(_=>render(root)));
    }else{
        section.append(state.nextPage(_=>render(root)));
    };



    root.append(section);
};
const state = {
    nextPage : null,
    data :null,
    phone:null
}
$(_=>{
    $.get('http://localhost:3000/api/',(error, data)=>{
        state.user = data;
        console.log(data);
        const root =$('#root');
        render(root);
    });
})