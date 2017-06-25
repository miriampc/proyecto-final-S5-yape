let interval;
const ResendCode = (update)=> {
    const resource = resources.codeResend;
    const containerCode = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const divInput = $('<div class="box"></div>');
    const input = $(`<input id="code" type="number" pattern="^[0-9]{6}" placeholder=". . . . . ." required>`);
    const icon = $(`<span class="icon"><img src="img/icons/lock.png"></span>`);
    const p = $('<p>Reintenta en: </p>');
    const reboot = $('<span id="second"></span>');
    const code = $(`<p>Tu CÓDIGO:<span id="code-generated">${state.userCode}</span></p>`);

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
            detener();
            update();
        }
    });
    interval = setInterval(contador,1000);

    return containerCode;
};
let cont=21;
function contador(){
    console.log(cont);
    if(cont > 0){
        cont --;
        $('#second').text(cont);
    }else{
        resendCodes(state.phone)
            .then((codeResponse)=>{
                $('#code-generated').empty();
                $('#code-generated').text(codeResponse);
            })
            .catch((err) => {
                console.log(err);
                $('#code').after(`<p>${err}</p>`);
                $('#code').val('');

            });
        cont=21;
    }
}
function detener(){
    clearInterval(interval);
}
