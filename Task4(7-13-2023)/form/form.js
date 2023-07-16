let fontfamily = document.getElementById("fontfamily");
let fontsize = document.getElementById("fontsize");
let textarea = document.getElementById("text");


// *****************font-family****************

  if (fontfamily.value === "Times New Roman"){
    textarea.style.fontFamily = "font-family: Times New Roman"
  }


fontfamily.onchange = () => {
  if (fontfamily.value === "Times New Roman"){
    textarea.style.fontFamily = "Times New Roman"
  }else if (fontfamily.value === "Fantasy"){
    textarea.style.fontFamily = "fantasy"
  }
}

// *****************font-size****************

if (fontsize.value === "10px"){
  textarea.style.fontSize = "10px"
}

fontsize.onchange = () => {
  if (fontsize.value === "10px"){
    textarea.style.fontSize = "10px"
  }else if (fontsize.value === "30px"){
    textarea.style.fontSize = "30px"
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