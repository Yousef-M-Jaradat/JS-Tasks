// let container = document.getElementById('container');
// let input1 = document.getElementById("input1");

// function insert(){
//     let insert = document.getElementById('input1').value;
//     if(insert==""){
//         alert("You must write something")
//     }else{
//         let p1 = document.createElement('p')
//         p1.innerHTML = `${insert}
//         <button class="btn" id="deleate" onclick="deleate()">Delete</button>
//         <button class="btn" id="update" onclick="update()">Update</button>
//         <hr>`
//     localStorage.setItem('taskNmae', insert)
//     p1.classList.add("taskp")
//     container.appendChild(p1)
//     // p1.innerHTML = localStorage.getItem('taskNmae')
//     input1.value = ""
//     }
// }
// function deleate(){
//     let p1 = document.getElementsByTagName("p")
//     localStorage.removeItem('taskNmae')
//     p1.style.display="none"
// }
// let p1 = document.createElement('p')
// p1.innerHTML = `${insert}
// <button class="btn" id="deleate" onclick="deleate()">Delete</button>
// <button class="btn" id="update" onclick="update()">Update</button>
// <hr>`
// p1.innerHTML = localStorage.getItem('taskNmae')
let container = document.getElementById('container')
let add = document.getElementById('add');

function insert(){
    let task = document.getElementById('input1').value
    if(task == ""){
        alert("You must write something")
    }else{
    localStorage.setItem('taskNmae',task)
    let p = document.createElement('p');
    container.appendChild(p);
    p.innerHTML = `${localStorage.getItem('taskNmae')}
    <button class="btn" id="deleate" onclick="deleate()">Delete</button>
    <button class="btn" id="update" onclick="update()">Update</button>
    <hr>` 
    input1.value = ""
    }
}

p.innerHTML = `${localStorage.getItem('taskNmae')}
    <button class="btn" id="deleate" onclick="deleate()">Delete</button>
    <button class="btn" id="update" onclick="update()">Update</button>
    <hr>` 
// async function Data() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const mydata = await response.json();
//       console.log(mydata);
      
//       function getdata(){

//         let t =document.getElementById("table")
//         for (let i=0 ; i<mydata.length ; i++){
//         let tr =document.createElement("tr")
//         t.appendChild(tr)
//         let td1 =document.createElement("td")
//         tr.appendChild(td1)
//         td1 .textContent = mydata[i].id
//         let td2 =document.createElement("td")
//         tr.appendChild(td2)
//         td2 .textContent = mydata[i].category
//         let td3 =document.createElement("td")
//         tr.appendChild(td3)
//         td3 .textContent = mydata[i].description
//         let td4 =document.createElement("td")
//         tr.appendChild(td4)
//         td4 .textContent = mydata[i].price
//         let td5 =document.createElement("td")
//         tr.appendChild(td5)
//         let im =document.createElement("img")
//         im.src = mydata[i].image
//         td5.appendChild(im)
//         im.style= "width:100px"

//     }
// }
// getdata()
//     } 
//     catch (error) {
//       console.error('An error occurred');
//     }
//     }