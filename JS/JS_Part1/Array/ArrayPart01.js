const myarr = [1,2,3,4,5,6]
console.log(myarr)
//in js array is like list in python
const myHeroes = ["Shaktiman", 10.32,22,true,[1,2,3]] //we can store multiple types of data
console.log(myHeroes)
console.log(myHeroes[4])

myHeroes.push(100)
console.log(myHeroes)
console.log(myHeroes.pop())


let myarr2 = [1,2,3,4,5]
console.log(myarr2.includes(1))  //check 1 exist or not and return boolearn value
console.log(myarr2.indexOf(5)) //return the index of 5 means 4
const newarr = myarr.join()
console.log(typeof newarr)  
console.log(typeof myarr)