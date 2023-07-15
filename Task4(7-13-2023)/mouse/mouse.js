let text = document.createElement("p");
text.innerText = "Can I Help You ?  "
document.body.appendChild(text);
text.style.cssText = `
font-size: 30px;
background-color: yellow;
padding: 15px;
width: 500px;
border: 1px solid black;
text-align: center;
font-weight: bold;`

text.onmouseleave = () => {
  text.innerText = "Can I Help You ?  "
}
text.onmouseover = () => {
  text.innerText = "Hello World!"
}
