async function odjData(){
    try {
        const response = await fetch('https://api.zippopotam.us/us/33162');
        const data = JSON.parse(response);
        console.log(data);

        function getdata(){
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
    catch (error){
        console.error('An error occurred');
    }
}