"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    if(state.currentPage == null){
        section.append(Portada(_=>render(root)));
    }else if(state.currentPage == 1){
        section.append(RegisterNumber(_=>(root)));
    }
    root.append(section);
};
const state = {
    currentPage : null
}
$(_=>{
    $.get('http://localhost:3000/api/',(error, data)=>{
        state.user = data;
        //console.log(data);
        console.log(data);
        const root =$('#root');
        render(root);
    });
})