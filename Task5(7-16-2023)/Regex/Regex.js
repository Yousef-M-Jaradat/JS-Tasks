function error1(){
    let message = document.getElementsByTagName("span")[0];
    message.innerHTML = "";
    let Fname = document.getElementById("Fname").value;
    let FnameRegExp = /^([^0-9]*)$/;
    try {
        if(FnameRegExp.test(Fname) === false)
        throw "Number are not allow";
    }
    catch(err) {
        message.innerHTML = " " + err
    }
}

function error2(){
    let message = document.getElementsByTagName("span")[2];
    message.innerHTML = "";
    let Bdate = document.getElementById("Bdate").value;
    let BdateRegExp = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/;
    try {
        if(BdateRegExp.test(Bdate) === false) 
        throw "The format should be dd/mm/yyyy";
    }
    catch(err) {
        message.innerHTML = " " + err
    }
}

function error3(){
    let message = document.getElementsByTagName("span")[3];
    message.innerHTML = "";
    let Email = document.getElementById("Email").value;
    let EmailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    try {
        if(EmailRegExp.test(Email) === false) 
        throw "The email is not valid";
    }
    catch(err) {
        message.innerHTML = " " + err
    }
}
function error4(){
    let message = document.getElementsByTagName("span")[4];
    message.innerHTML = "";
    let Cemail = document.getElementById("Cemail").value;
    let CemailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    try {
        if(CemailRegExp.test(Cemail) === false  && Cemail.matches(Email) === false) 
        throw "The email is not match";
    }
    catch(err) {
        message.innerHTML = " " + err
    }
}