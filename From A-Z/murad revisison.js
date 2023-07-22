let string = "murad is a member of";
console.log(string.startsWith("member",11));

let murad = "hi"

function name (){
    console.log(murad);
}
name()

for(i=0 ; i != 5 ; i++) {
    console.log("qasem");
}
//************************************* */
function larger(x,y){
    if(x>y){
        console.log(x);
    }else if(y>x){
        console.log(y);
    }else{
        console.log(`${x}=${y}`);
    }
}

larger(55,66)
larger(66,55)
larger(55,55)
//******************************************* */
function multiple(x,y,z){
    let a = x*y*z;
    if(a < 0){
        console.log(`the result is ${a} and the sign of the number is - `);
    }else{
        console.log(`the result is ${a} and the sign of the number is + `);
    }
}

multiple(1,-1,55)
//************************************************ */

function sort(x,y,z){
    if(x > y && x > z){
        if(y > z){
            console.log(x,y,z);
        }else{
            console.log(x,z,y);
        }
    }
    if(y > x && y > z){
        if(x > z){
            console.log(y,x,z);
        }else{
            console.log(y,z,x);
        }
    }
    if(z > x && z > y){
        if(x > y){
            console.log(z,x,y);
        }else{
            console.log(z,y,x);
        }
    }
}
sort(55,3,-17)


var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }

console.log(Arr);

//************************************************* */

