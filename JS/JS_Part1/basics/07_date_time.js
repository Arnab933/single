let mydate = new Date()
console.log(typeof mydate) // object 

console.log(mydate.toString()) // Wed Feb 21 2024 22:33:38 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())  // Wed Feb 21 2024
console.log(mydate.toLocaleDateString()) // 2/21/2024


let myCreateDate = new Date(2023,1,23,5,30)
console.log(myCreateDate.toDateString()) // Mon Jan 23 2023
console.log(myCreateDate.toLocaleString()) // 1/23/2023, 5:30:00 AM


//if we want to declare the date to YY-MM-DD format then 
let day = new Date("2023-01-23")
console.log(day.toLocaleString())
console.log(new Date("01-23-2023").toLocaleString())

console.log(Date.now()) //return a long milisecond value which is started count from 1970s

let newDate = new Date()
console.log(newDate.getMonth())  //return no. of month which is started from 0
console.log(new Date().getDay()) // return no. of day which is started from Monday
