function color (){
    let x = document.getElementById("color").value;
    sessionStorage.backgroundColor = x;
    document.body.style.backgroundColor = sessionStorage.backgroundColor;
}
document.body.style.backgroundColor = sessionStorage.backgroundColor;



// color.addEventListener('input', function(){
//     let color = document.getElementById('color');
//     sessionStorage.setItem("background", color.value);
//     document.body.style.background = color.value;
// })
// document.body.style.background = sessionStorage.background;
