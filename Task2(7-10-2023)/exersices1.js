/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
console.log("******************* Task1 Question1******************");

let x1 = -5;
let y1 = 10;
if( x1 > y1){
    console.log(x1);
}else {
    console.log(y1);
}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
of product of three numbers. Display an alert box with the 
specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
console.log("******************* Task1 Question2******************");

let arr2=[3, -7, 2];
if (arr2[0] < 0){
    console.log(``);
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
console.log("******************* Task1 Question3******************");

let x3 = 0;
let y3 = -1;
let z3 = 4;

if( x3 > y3 && x3 > z3 && y3 > z3){
    console.log(x3,y3,z3);
}else if( x3 > y3 && x3 > z3 && z3 > y3){
    console.log(x3,z3,y3);
}else if( y3 > x3 && y3 > z3 && x3 > z3){
    console.log(y3,x3,z3);
}else if( y3 > x3 && y3 > z3 && z3 > y3){
    console.log(y3,z3,x3);
}else if( z3 > x3 && z3 > y3 && x3 > y3){
    console.log(z3,x3,y3);
}else{
    console.log(z3,y2,x3);
}
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
console.log("******************* Task1 Question4******************");

let a4 = -5 ,b4 = -2 ,c4 = -6 ,d4 = 0 ,e4 =-1 ;

if(a4 > b4 && a4 > c4 && a4 > d4 && a4 > e4){
    console.log(a4);
}else if(b4 > a4 && b4 > c4 && b4 > d4 && b4 > e4){
    console.log(b4);
}else if(c4 > a4 && c4 > b4 && c4 > d4 && c4 > e4){
    console.log(c4);
}else if(d4 > a4 && d4 > b4 && d4 > c4 && d4 > e4){
    console.log(d4);
}else{
    console.log(e4)
}

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
console.log("******************* Task1 Question5******************");

let x,y;
x5 = 55;
y5 = -55
if(x5 > y5){
    console.log("Hello World");
}else{
    console.log("Goodbye");
}

 /******* End Your Code ********* */



