let select = document.createElement("select");
console.log(select);
select.innerHTML = `
<option id="Jordan">Jordan</option>
<option id="Palstin">Palstin</option>
`;
let Jordan = document.getElementById("Jordan");
let Palstin = document.getElementById("Palstin");

document.body.appendChild(select);

let br = document.createElement("br");
document.body.appendChild(br);

let img = document.createElement("img");
document.body.appendChild(img);

  if (select.value === "Jordan"){
    img.src = "/flags/jordan.png"
  }


select.onchange = () => {
  if (select.value === "Jordan"){
    img.src = "/flags/jordan.png"
  }else if (select.value === "Palstin"){
    img.src = "/flags/palestine.png"
  }
}

img.style.cssText = `width: 500px`