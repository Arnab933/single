const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myobj) {
   console.log(`Full form of ${key} is:${myobj[key]}`)
}

const arr = ['a','b','c','d','e']
for (const key in arr) {
    console.log(key)  // display indices of the array
}


for (const key in arr) {
   console.log(arr[key])  //internally array is one type of map 
}

const array = ["js","ruby","cpp","java"]

array.forEach( function(item){  //as the function is a callback function hence no any name 
    console.log(item)
} )
console.log()

array.forEach((item)=>{
    console.log(item)
})



array.forEach((item,index,ar)=> {
    console.log(item,index,ar)
});

const myobj2  = [
    {
        myfileName : "myfile",
        myEmailName : "apratihar18@gmail.com"
    },
    {
        myfileName : "myfile2",
        myEmailName : "apratihar933@gmail.com"
    }
]
myobj2.forEach( (item)=> {   //here every item is an object 
    console.log(item.myfileName,item.myEmailName)
});



const arr3 = [1,2,3,4,5,6,7,8,9]
arr3.forEach((item) => console.log(item));  //

// using filter


let result = arr3.filter((num)=>num > 5)  //filter function creates an array and return depends on condition 
console.log(result)
console.log(arr3.filter((num)=>num > 5))

const result2 = arr3.filter((num)=>{
    return num > 5
});

console.log(result2)



const nums = [1,2,3]
nums.push(100)  //for add an element in array use push function 
console.log(nums) 


let result3 = nums.map((num)=> num+10)
console.log(result3)  

console.log()

let arr4 = [1,2,3,4,5,6,7]
let result5 = arr4.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50)  // chaining 
console.log(result5)