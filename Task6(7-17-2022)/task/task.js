const x = new XMLHttpRequest();

x.open('GET','task.json');

x.onload = function() {
    const y = JSON.parse(this.responseText);
    console.log(y);

    
}

x.send()