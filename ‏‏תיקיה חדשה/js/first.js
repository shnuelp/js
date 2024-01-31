/*

let firstName = "shmuel"; 
let age = 21; 
let student = true; 
var vip = [];
vip[0] = "יודה"; 
vip[1] = "לוי"; 
vip[2] = "שלומית"; 
vip["aa"] = "נינט";
console.log(vip)
console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML="hello"+firstName;*/

let username;

document. getElementById("button").onclick = function(){

username = document. getElementById("mytext").value;
console.log(username) ;
document. getElementById("label").innerHTML = "Hello " username;
}