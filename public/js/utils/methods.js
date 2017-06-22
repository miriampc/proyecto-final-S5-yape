const registerPhoneNumber = (phone,terms) => {
    return new Promise((resolve,reject) => {
        $.post('/api/registerNumber',{
            phone: phone,
            terms: terms
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage = ResendCode;
            } else {
                reject(new Error(response.message));
                state.nextPage = RegisterNumber;
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
                    state.User=response.data;
                        resolve(response.data);
                        state.userCode=response.data;
                        state.nextPage = RegisterUser;
                } else {
                    reject(new Error(response.message));
                    state.userCode = response.data;
                    state.nextPage=RegisterNumber;
                }
            })
    });
};

const createUser = (phone,name,email,password)=>{
    debugger;
    return new Promise((resolve,reject) => {
        $.post('/api/createUser',{
            phone : phone,
            name:name,
            email:email,
            password:password
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage=CheckUser;
            } else {
                reject(new Error(response.message));
                state.nextPage=RegisterUser;
            }
        })
    });
};

const registerCard = (phone,name,email,password)=>{
    debugger;
    return new Promise((resolve,reject) => {
        $.post('/api/registerCard',{
            phone : phone,
            name:name,
            email:email,
            password:password
        },(response) => {
            if (response.success) {
                resolve(response.data);
                state.nextPage=RegisterCard;
            } else {
                reject(new Error(response.message));
                state.nextPage=CheckUser;
            }
        })
    });
};