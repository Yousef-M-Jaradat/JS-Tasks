// let name = ["yousef", "qasem", "mrabet", "ghzawi"];
// let age = [25, 23, 20, 23];
// let div = document.createElement("div");

// document.body.appendChild(div);

// for (let i = 0; i < name.length; i++) {
//   let card = document.createElement("div");
//   let header = document.createElement("h1");
//   header.textContent = name[i];
//   let agenode = document.createElement("p");
//   agenode.textContent = age[i];
//   let image = document.createElement("img");
//   image.src = "../slider.jpg";
//   image.classList.add("image");

//   card.appendChild(header);
//   card.appendChild(agenode);
//   card.appendChild(image);
//   div.appendChild(card);

//   div.style.cssText =
//     "display:flex;flex-wrap:wrap;justify-content:space-around;";
//   image.style.cssText = "width:80%";
//   card.style.cssText =
//     "height : 300px ;width:300PX;display:flex;flex-direction:column;justify-content:space-EVENLY;align-items:center;border:solid 1px gray;background-color:gray;margin-top:10px;";
// }







// let Fontselect = document.createElement("select");
// Fontselect.innerHTML=`
// <option id="Times">Tmes New Roman</option>
// <option id="Fantasy">Fantasy</option>`;
// document.body.appendChild(Fontselect);
// let Fontsizeselect = document.createElement("select");
// Fontselect.innerHTML=`
// <option id="F10">10px</option>
// <option id="F15">15px</option>`;
// document.body.appendChild(Fontsizeselect);
// let italic = document.createElement("input");
// italic.setAttribute = ("type","checkbox")
// document.body.appendChild(italic);
// let labelitalic = document.createElement("label");
// document.body.appendChild(labelitalic);



// dollar = document.getElementById("dollar");
// denar = document.getElementById("denar");

// dollar.onkeyup = function(){
//   denar.value = dollar.value / 1.4
// }
// denar.onkeyup = function(){
//   dollar.value = denar.value * 1.4
// }


const fotntfamilyarray = ["Times New Roman","Fantasy","Georgia"]
const fontsizearray = ["10px", "15px", "20px", "25px", "30px", "35px"]

let fontfamily = document.getElementById("fontfamily");
let fontsize = document.getElementById("fontsize");
let textarea = document.getElementById("text");


// *****************font-family****************

// for(let i = 0; i <= fontfamilyarray.length; i++){
//   if(fontfamily === fontfamilyarray[i]){
//     textarea.style.cssText = "font-family: fontfamilyarray[i]"
//   }
//   fontfamily.onchange = () => {
//     if (fontfamily.value === fontfamilyarray[i]){
//       textarea.style.cssText = "font-family: fontfamilyarray[i]"
//     }else if (fontfamily.value === fontfamilyarray[i+1]){
//       textarea.style.cssText = "font-family: fontfamilyarray[i+1]"
//     }
//   }
// }






  if (fontfamily.value === "Times New Roman"){
    textarea.style.cssText = "font-family: Times New Roman"
  }


fontfamily.onchange = () => {
  if (fontfamily.value === "Times New Roman"){
    textarea.style.cssText = "font-family: Times New Roman"
  }else if (fontfamily.value === "Fantasy"){
    textarea.style.cssText = "font-family: fantasy"
  }
}

// *****************font-size****************

if (fontsize.value === "10px"){
  textarea.style.fontSize = `10px`
}


fontsize.onchange = () => {
  if (fontsize.value === "10px"){
    textarea.style.fontSize = `10px`
  }else if (fontsize.value === "15px"){
    textarea.style.fontsize = `15px`
  }
}

// *****************font-Style****************

let italic = document.getElementById("italic");

italic.addEventListener("click", () => {
  if (italic.checked) {
    text.style.fontStyle = "italic";
  } else {
    text.style.fontStyle = "normal";
  }
});
// *****************font-weight****************

let bold = document.getElementById("bold");

bold.addEventListener("click", () => {
  if (bold.checked) {
    text.style.fontWeight = "bold";
  } else {
    text.style.fontWeight = "normal";
  }
});
// *****************text-decoration****************
let underline = document.getElementById("underline");

underline.addEventListener("click", () => {
  if (underline.checked) {
    text.style.textDecoration = "underline";
  } else {
    text.style.textDecoration = "none";
  }
});


// let text = document.createElement("p");
// text.innerText = "Can I Help You ?  "
// document.body.appendChild(text);
// text.style.cssText = `
// font-size: 30px;
// background-color: yellow;
// padding: 15px;
// width: 500px;
// border: 1px solid black;
// text-align: center;
// font-weight: bold;`

// text.onmouseleave = () => {
//   text.innerText = "Can I Help You ?  "
// }
// text.onmouseover = () => {
//   text.innerText = "Hello World!"
// }
