const ResendCode = (update)=> {
    const resource = resources.codeResend;
    const containerCode = $('<section class="container"></section>');
    const formVerfication = $('<form class="form-control flex"></form>');
    const input = $(`<input id="text" type="number" pattern="^[0-9]{6}" placeholder=". . . . . ." required>`);
    const checkbox = $(`<input id="terms" type="checkbox">`);
    const reboot = $('<p>Reintentar en 21</p>');
    const code = $(`<div><p>Tu CÓDIGO: ${state.userCode}</p></div>`)


    formVerfication.append(input);
    formVerfication.append(reboot);
    containerCode.append(Instructions(resource.image,resource.title,resource.description));
    containerCode.append(formVerfication);
    containerCode.append(code);

    formVerfication.submit((e)=> {
        e.preventDefault();
        if (input.val() == state.userCode) {
            resendCodes(state.phone)
                .then((data) => {
                    state.userCode = data.data;
                    console.log(state.userCode);
                    update();
                })
                .catch((err) => {
                    input.after(`<p>${err}</p>`);
                    update();
                });
        } else {
            state.nextPage = 2;
        }
    });

    return containerCode;
};