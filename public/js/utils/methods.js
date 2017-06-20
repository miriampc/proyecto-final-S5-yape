const registerNumberPost = (query,status)=>{
    "use strict";
    $.post('http://localhost:3000/api/registerNumber',{
      "phone" : query,
      "terms" : status
    },(data)=>{
        console.log(data);
    });

};

const resendCodePost = (query,status)=>{
    "use strict";
    $.post('http://localhost:3000/api/resendCode',{
        "phone" : query
    },(data)=>{
        console.log(data);
    });

}