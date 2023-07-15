dollar = document.getElementById("dollar");
denar = document.getElementById("denar");

dollar.onkeyup = function(){
  denar.value = dollar.value / 1.4
}
denar.onkeyup = function(){
  dollar.value = denar.value * 1.4
}