/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
console.log("******************* Task2 Question1******************");

let rate,x2_1;
rate = 99;
if (rate < 50 ){
    x2_1 = 0;
}else if (rate >= 50 && rate <= 59){
    x2_1 = 1;
}else if (rate >= 60 && rate <= 69){
    x2_1 = 2 ;
}else if (rate >= 70 && rate <= 79){
    x2_1 = 3;
}else if (rate >= 80 && rate <= 89){
    x2_1 = 4;
}else if (rate >= 90 && rate <= 100){
    x2_1 = 5;
}

switch(x2_1){
    case 0 : console.log("Fail");
    break;
    case 1 : console.log("E");
    break;
    case 2 : console.log("D");
    break;
    case 3 : console.log("C");
    break;
    case 4 : console.log("B");
    break;
    case 5 : console.log("A");
    break;
}