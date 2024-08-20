const Sname = "arnab"
const title = " Pratihar"
const repocount = 10
console.log(Sname + repocount)

console.log(`hello my name is ${Sname} and my repo number is ${repocount}`)

console.log("hello my name is:"+Sname+" and my repo number is:"+repocount)

const newName = Sname + title

const gameName = new String("carrom")  //another process for string declaration
console.log(gameName)


console.log(gameName.length) //length of the string
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf("r"))

let text = "HELLO WORLD";
let char = text.charCodeAt(0); //return the ascii code of specified character
console.log(char)

const Nname = "W3Schools";
console.log(Nname.at(2)); //same as charAt method difference is .at() method supports negative indexs while .charAt() method not supported

let str = "hii I am Arnab"
console.log(str.slice(-5))  // return a string from starting index to ending index and it supports negative indexes.if we give the negative index then js ignored it and considered from zero

console.log(str.substring(9,14))
console.log(str.substring(9)) //if we give the single means starting index then it print the whole string from the given index not support  negavie value 


let text1 = "     Hello World!     ";
console.log(text1.trimStart())  // trimg from start
console.log(text1.trimEnd())  //trim from end

let text2 = "5";
console.log(text2.padStart(1,"x"))  // 
console.log(newName.replace("arnab","sujit")) //replace in the place of first given string to second string 

console.log(newName.includes('arnab'))  // check the string exist or not 

console.log(newName.split(" "))  //convert into an array on the bases of  (" ")
console.log(newName.split("").length)  //convert the char array from that string 