/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let x=250;
let y=2.5/100;
let zakat =x*y
console.log(zakat);


/*
Array Tasks : 
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]

*/
let numarray=[1,7,9,45]
let srtarray=["Str","alex","moh"]
let single=['the','fox','over','lazy','dog',' ']
console.log(numarray);


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"));
//answer=1
    

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

const Favourite=[["dawaly","maglobh"],["voly","chess","socer"],["harry","justice"]]

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const ques4=["t","u","g","x"]
let Element1=ques4[0]
console.log(Element1);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

const ques5=["t","u","g","x"]
let Element2=ques5[ques5.length-1]
console.log(Element2);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var question6 =[0,5,7,9]
question6.push(10);
console.log(question6);
question6.splice(0,3)
console.log(question6);
question6.unshift(1,3,4,6,8)
console.log(question6);





/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var question6 =[0,5,7,9]
question6.push(-7,3.5)
console.log(question6);
question6.splice(2,1)
console.log(question6);
question6.shift()
console.log(question6);




// question6.

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1.sort(Number));
console.log(arr1.sort());
var arr2 = arr1.sort()
console.log(arr2);

arr1[0] = arr1.splice(1, 1, arr1[0])[0];
console.log(arr1);

