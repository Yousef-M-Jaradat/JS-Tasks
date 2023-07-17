let btn = document.getElementById("btn");
btn.onclick = function(){
    const x = new XMLHttpRequest();
x.open('GET',"task.json");//

let table = document.querySelector('table');

x.onload = function(){
    let tableobj = JSON.parse(x.responseText);//ملف الجيسون عبارة عن txt
    for (let i=0; i<tableobj.length; i++) {
        let trtable = document.createElement('tr');
        table.appendChild(trtable);
        for (const key in tableobj[i]) {
            if (key === "image"){
                let tdtable = document.createElement("td");
                tdtable.innerHTML = `<img style="width: 100px; height: 100px;" src="${tableobj[i][`${key}`]}">`;  
                trtable.appendChild(tdtable);              
            }else{
            let tdtable = document.createElement("td");
            tdtable.innerHTML = tableobj[i][`${key}`];
            trtable.appendChild(tdtable);
        }
    }
        }
}
x.send();//تبعثه لملف الhtml
}