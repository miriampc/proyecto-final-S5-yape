const registerPhoneNumber = (phone,terms) => {
    return new Promise((resolve,reject) => {
        $.post('/api/registerNumber',{
            phone: phone,
            terms: terms
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage=2;
            } else {
                reject(new Error(response.message));
                state.nextPage=1;
            }
        })
    });
}


const resendCodes = (phone)=>{
    return new Promise((resolve,reject) => {
        $.post('/api/resendCode',{
            phone: phone
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage=3;
            } else {
                reject(new Error(response.message));
                state.nextPage=2;
            }
        })
    });
};

const createUser = (phone,name,email,password)=>{
    return new Promise((resolve,reject) => {
        $.post('/api/createUser',{
            phone : phone,
            name:name,
            email:email,
            password:password
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage=4;
            } else {
                reject(new Error(response.message));
                state.nextPage=3;
            }
        })
    });
};