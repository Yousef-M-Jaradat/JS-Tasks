function color (){
    let x = document.getElementById("color").value;
    sessionStorage.backgroundColor = x;
    document.body.style.backgroundColor = sessionStorage.backgroundColor;
}
document.body.style.backgroundColor = sessionStorage.backgroundColor;