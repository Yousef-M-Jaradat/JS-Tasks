// 1. Write a JS code to print numbers from 1 to 10
console.log("******************* Task3 Question1******************");

for(let i = 0; i < 10; i++){
   console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
console.log("******************* Task3 Question2******************");

var arr = [13,23,12,45,22,48,66,100]

for(let i = 0; i < arr.length; i++){
   if(arr[i] % 2 == 0)
   console.log(arr[i]);
}
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 
*/
console.log("******************* Task3 Question3******************");

let rows = 8 ;
let input = ""
for(i = 1; i <=rows; i++) {
   for(let j = 1; j <=i; j++) {
      input += j
   }
   input +="\n"
}
console.log(input);

/* 
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/
console.log("******************* Task3 Question4******************");
let x3_4 = "don’t know why";
if (x3_4.includes("y")){
   console.log("Yes");
}else{
   console.log("No");
}