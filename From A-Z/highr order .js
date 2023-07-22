//map array methods and  new array

// let myarray = [1,2,3,4,5,6]
// let newArray = [];
// for (let i = 0; i < myarray.length; i++) {
//     newArray.push(myarray[i] +myarray[i]);
// }
// console.log(newArray);



// let addself = myarray.map(function(element,index,array){//the index and the array isnot important
//     console.log(`element ${element}`);
//     console.log(`index ${index}`);
//     console.log(`array ${array}`);
//     console.log(`this ${this}`);
//     return element+element;
// },10)
// console.log(addself);



// let addself = myarray.map((element) => element+element)
// console.log(addself);

// function mapp(e){
//     return e+e;
// }

// let addslf1 = myarray.map(mapp)
// console.log(addslf1);


let swapping = "ELzero";
// let sw = swapping.split("")
// console.log(sw);



let hh = swapping.split("").map(function(ele){
    return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()
}).join("")
console.log(hh);
console.log(swapping);
///////////////////////////////////////////////////////

// let inverter = [1,-1,5,-5,10,-10]

// let self = inverter.map(function(ele){
//     return ele < 0 ? ele*-1 : ele*-1
// })
// console.log(self);
/////////////////////MAP//////////////////////////////

let inverter = [1,-1,5,-5,10,-10]

let self = inverter.map(function(ele){
    return -ele
})
console.log(self);



let ignore = "el55zero123456"
let ignoreNumbers = ignore.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele : ""
}).join("")

console.log(ignoreNumbers);
//////////////////////Filter///////////////////////////////

let ignoreFilter = ignore.split("").filter(function(ele){
    return isNaN(ele)
}).join("")
console.log(ignoreFilter);

//////////////////////Filter///////////////////////////////

let num = [11,55,60,70,22]
let even = num.filter(function(ele){
    return ele%2 == 0 ? true : false
})
console.log(even);

//////////////////////Filter///////////////////////////////

let sen = "I Love Food And Playing Games";
let sensplit = sen.split(" ");
// let setjoin = setsplit.join(" ")
console.log(sensplit);
// console.log(setjoin);


let senU = sen.split(" ").filter(function(ele){
    return ele.length > 4 
}).join(" ")
console.log(senU);

//////////////////////Filter///////////////////////////////

let mix = "A13BS2ZX"

let str = mix.split("").map(function(ele){
    return isNaN(ele) ? ele : ele*ele;
}).filter(function(ele){
    return !isNaN(ele)
}).join("")
console.log(str);


let number = mix.split("").filter(function(ele){
    return !isNaN(ele);
}).map(function(ele){
    return ele*ele
}).join("")
console.log(number);

///////////////////////Reduce////////////////////////////

let arrr = [10,20,15,30]

let newarrr = arrr.reduce(function(acc,cur){
    return cur+acc
},5)

console.log(newarrr);

//////////////////////////////////////////////////////////

let thebiggest = ["hello","dkfklmfkefyy","efkemfke","kmfkm","kewmfk"] 
let ass = thebiggest.reduce(function(acc,cur){
    return acc.length > cur.length ? acc : cur
})
console.log(ass);

let remove = ["e","@","@","l","@","z","e","r","o"]

let char = remove.filter(function(ele){
    return ele != "@"
}).reduce(function(acc,cur){
    return acc+cur
})
console.log(char);