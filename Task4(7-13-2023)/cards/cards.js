let container = document.createElement('div');
document.body.appendChild(container);

function cards(names ,ages){
    for (let i = 0; i < names.length ; i++) {
        let card = document.createElement('div');
        let name = document.createElement('h3');
        let age = document.createElement('p');
        let image = document.createElement('img');
        
        name.textContent = names[i];
        age.textContent = ages[i];
        image.src = '/cards/2.png';
        
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(image);
        container.appendChild(card);
        
        image.style.cssText = `width: 270px`
        card.style.cssText = `height: 300px;
        width: 300px;
        text-align: center;
        border: 1px solid black;
        margin:5px`
        container.style.cssText = `display: flex;
        flex-flow:row wrap;
        justify-content: center;
        align-items: center;`
    }
}

const names = ["yousef" ,"mohammed" , "qasem" ,"murad" ,"aya"];
const ages = [23 ,24 ,25 ,26 ,15];
cards(names, ages)