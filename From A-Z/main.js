color.addEventListener('input', function(){
    let color = document.getElementById('color');
    sessionStorage.setItem("background", color.value);
    document.body.style.background = color.value;
})
document.body.style.background = sessionStorage.background;
