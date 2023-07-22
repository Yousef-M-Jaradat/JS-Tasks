console.log('Here is : ', 'Reduce & Filter') 

// Using Reduce 1 -5
  var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];


  
  
  
  
  /*
  1
  Using the varabile persons
  Create a function called avgAge
  that accept an array
  and return average age of this array
  
  Ex: avgAge(persons) => 41.2
  */
 
 function avgAge(a){
   let age = persons.map((persons)=>persons.age).reduce((acu,cur)=>acu+cur)
   console.log(age/persons.length);
  }
  avgAge(persons)
  
  // let avgAge = persons.reduce(function(acc,cur){
  //   return acc+cur/persons.length
  // })
  // console.log(avgAge);
  
  
  /*
  2
  Using the varabile persons
  Create a function called longestName
  that accept an array
  and return the longerst full name
  
  Ex: longestName(persons) => 'Soso Al-Amora'
  */
 
 function longestNmae(a){
   let long = persons.map(function(persons){
     return persons.name
   })
   let long1 = long.map(function(long){
     return long.first + ' ' + long.last
   })
   let longest = long1.reduce(function(acc,cur){
     return acc.length > cur.length ? acc : cur
   })
   console.log(longest);
 }
 longestNmae(persons)

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
let number = [1,2,4,9];
function maxNumber(n){
let max = number.reduce(function(acc,cur){
  return acc.length > cur.length ? acc : cur;
})
console.log(max);
}
maxNumber(number);
maxNumber([1,2,4,9])

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

let repeatChar = (string,char)=>{
  return string.split("").filter((ele)=>ele === char).length
}
console.log(repeatChar("hello world","w"));

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
// let arr = []
// function usAndNumberBeetweenUs(x,y){
// let xy = x.reduce(function(ele,ind){
//   return x === y ?  arr += x : arr
// })
// console.log(arr);
// }
// usAndNumberBeetweenUs(2,5)




//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

function evenOnly(arr){
  let arrr = arr.filter(function(ele){
    return ele %2 == 0
  })
  console.log(arrr);
}
evenOnly([1,8,6,4])
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr){
  let arrr = arr.filter(function(ele){
    return ele%4 == 0
  })
  console.log(arrr);
}
multiFour([1,8,6,4])
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

let array = ["hello","world"]
let arrrr = array.filter(function(ele){
  return array.includes(ele) ? array.index : false 
})
console.log(arrrr);
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"] 
*/
strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
let evenIndexOddLength =(strings)=>{
  return strings.filter((ele,ind)=>ele.length%2 != 0 && ind%2 == 0) 
}
console.log(evenIndexOddLength(strings)); 
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
// console.log('Here is : ', 'Reduce & Filter') 

function olderThan(persons,age){
let details = persons.filter(function(persons){
  return persons.age >age
})
console.log(details);
}
olderThan(persons,56)
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
let array11 = ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterThan(strings,number){
let arr11 = strings.filter(function(ele){
  return ele.length < number
})
console.log(arr11);
}
shorterThan(array11,5)
// if you finish the exercises review the material of the week and help your classmate
