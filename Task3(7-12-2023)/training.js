 // let result=0;
// function calc(...Numbers){
//     for(let i=0 ; i<Numbers.length ; i++){
//         document.write(`${Numbers[i]}  + `+" <br>")
//     result += Numbers[i]
// }
// return result;
// }


function details(Name, Age ,bool){
    if(typeof Name=== 'String' && typeof Age=== 'Number' && typeof bool=== 'true'){
    console.log(`Hello ${Name} , Your Age is ${Age} , You Are Available To Hire.`)
    }else if(typeof Name=== 'Number'  && typeof Age=== 'String' && typeof bool=== 'true'){
    console.log(`Hello ${Age} , Your Age is ${Name} , You Are Available To Hire.`)
    }
}

details(23, "Yousef", true)