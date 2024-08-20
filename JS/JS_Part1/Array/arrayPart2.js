const arr1 = ["Arnab","sujit", "debjit"]
const arr2 = [ "hii","i","am",["debasish","suvendu"]]
// arr1.push(arr2)
// console.log(arr1) //array are marged like an element

const newArr = arr1.concat(arr2)
console.log(newArr)

const sarray = [...arr1,...arr2]
console.log(sarray)