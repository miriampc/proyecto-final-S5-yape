function enabledButton(id){
    $(`#${id}`).removeAttr('disabled');
}
function disabledButton(id){
    $(`#${id}`).attr('disabled','disabled');
}

function verifyRegisterNumber(phoneNumber,checkbox,button) {
    if(phoneNumber.length == 9 && phoneNumber.charAt(0) == 9 && checkbox.prop('checked')) {
        enabledButton(button.attr('id'));
    }else {
        disabledButton(button.attr('id'));
    }
}