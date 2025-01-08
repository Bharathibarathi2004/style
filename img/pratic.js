// Push()--> add an element at last to arrey
// Pop()-->delect an element at last to arrey
// shift()-->delect an element at last to array
// unshift()-->add an element at last to arrey
// spline()--> add element at partical position

// let myarray = [1,"Hello",1,2,3,1.25,1.25]
// myarray.push(23)
// console.log(myarray)
// myarray.pop()
// myarray.shift()
// console.log(myarray)
// myarray.unshift("New Element")
// console.log(myArrey)
// myarray.splice(0,1.25)
// console.log(myarray[3])
// console.log(myarray.indexOf(1.25))
// console.log(myarray.lastIndexOf(1.25))

// console.log(myarray.splice(2,6))
// console.log(myarray.includes("Hello"))

// myarray=[1,"Hello",2,3,4,5,6,7,8]
// myarray.splice(2,2,45,95)
// console.log(myarray)

// let num=[5,-34,3,6,7,9,100,-1]
// num.sort()
// num.reverse()
// console.log(num)

let newarray=[1,"Hello",2,"javascript",3,"python",4,"Bye"]
// newArray.sort()
// console.log(newArray)
let output =[]
for(let data=0;data<newarray.length;data++){
    // console.log(newArray[data])
    if(typeof newarray[data]=="number"){
           output.push(newarray[data])
    }
    else{
        output.unshift(newarray[data])
    }
    
}
console.log(output)