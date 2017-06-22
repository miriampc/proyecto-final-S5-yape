const ResendCode = (update)=> {
    const resource = resources.codeResend;
    const containerCode = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const input = $(`<input id="code" type="number" pattern="^[0-9]{6}" placeholder=". . . . . ." required>`);
    const icon = $(`<span class="icon"><img src="img/icons/lock.png"></span>`);
    const p = $('<p>Reintenta en: </p>');
    const reboot = $('<span id="second">21</span>');
    const code = $(`<div><p>Tu CÓDIGO: ${state.userCode}</p></div>`);


    divInput.append(input);
    divInput.append(icon);
    formVerfication.append(divInput);
    p.append(reboot);
    formVerfication.append(p);
    containerCode.append(Instructions(resource.image,resource.title,resource.description));
    containerCode.append(formVerfication);
    containerCode.append(code);

    input.on('keypress keyup',(e)=> {
        if (input.val() == state.userCode) {
            state.nextPage = RegisterUser;
            update();
        } else {
            state.nextPage = ResendCode;
        }

    });

    return containerCode;
};
let cont=22;
function contador(query,sec,code){
    let seconds = setInterval(_=>{
        cont--;
        sec.text(cont);
        if(cont<=0){
            resendCodes(query,state.phone)
            .then((codeResponse)=>{
                console.log(codeResponse);
                state.userCode = codeResponse;
                if(query==state.userCode){
                    clearInterval(seconds);
                    update();
                }else {
                    code.after(`<p>${state.userCode}</p>`);

                }
            })
            .catch((err) => {
                console.log(err);
                $('#code').after(`<p>${err}</p>`);
                $('#code').val('');
                //update();
                //code.append(`<p>state.userCode</p>`);

            });
            cont=22;
        }
    },1000);
    console.log(seconds);
    return seconds;
}
