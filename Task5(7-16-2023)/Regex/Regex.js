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