function names(){
    let name = document.getElementById("name").value;
    localStorage.Name = name;
    let age = document.getElementById("age").value;
    localStorage.Age = age;
    let gender = document.getElementById("gender").value;
    localStorage.Gender = gender;
    let desc = document.getElementById("desc").value;
    localStorage.Desc = desc; 
    let major = document.getElementById("major").value;
    localStorage.Major = major; 
    let sibling = document.getElementById("sibling").value;
    localStorage.Sibling = sibling; 
    let dessibling = document.getElementById("dessibling").value;
    localStorage.Dessibling = dessibling; 
}
function dates(){
    let date = document.getElementById("date").value;
    localStorage.Date = date;

}
function imgs() {
    let img = document.getElementById("img").value;
    localStorage.Img = img;
}
function cards() {
    let card1 = document.getElementById("card1");
    let para1 = document.getElementsByTagName("p")[0];
    para1.innerText = "Name : "+localStorage.getItem("Name")
    let para2 = document.getElementsByTagName("p")[1];
    para2.innerText = "Age : "+localStorage.getItem("Age")
    let para3 = document.getElementsByTagName("p")[2];
    para3.innerText = "Gender : "+localStorage.getItem("Gender")
    let para4 = document.getElementsByTagName("p")[3];
    para4.innerText = "Date : "+localStorage.getItem("Date")
    card1.style.cssText = " width: 400px; height: 200px; border: 1px solid black; position: absolute; left:50%;padding: 0px 15px";

    let card2 = document.getElementById("card2");
    let para5 = document.getElementsByTagName("p")[4];
    para5.innerText = "Description : "+localStorage.getItem("Desc")
    let para6 = document.getElementsByTagName("p")[5];
    para6.innerText = "Major : "+localStorage.getItem("Major")
    let para7 = document.getElementsByTagName("p")[6];
    para7.innerText = "Programming Language : "+localStorage.getItem("lang")
    card2.style.cssText = " width: 400px; height: 110px; border: 1px solid black; position: absolute; left:50%; bottom: 55%;padding: 0px 15px";

    let card3 = document.getElementById("card3");
    let para8 = document.getElementsByTagName("p")[7];
    para8.innerText = "Sibling Numbers : "+localStorage.getItem("Sibling")
    let para9 = document.getElementsByTagName("p")[8];
    para9.innerText = "Description of Sibling : "+localStorage.getItem("Dessibling")
    card3.style.cssText = " width: 400px; height: 110px; border: 1px solid black; position: absolute; left:50%; bottom: 35%;padding: 0px 15px";
}