//  const names = ['shsisir', 'kamal', 'kali', 'jani']
//  names[2] = 'kamala'
//  console.log(names)

//  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', ]
 //this is the index of the array to get the value of the array
//  console.log(days[3])


// this is the example of the push method to add the value of the array
// days.push('sunday')

//this is the example of the pop method to remove the value of the array
// days.pop()

//
// days.unshift("sunday")
// days.shift()


// console.log(days.length)

// first index and last index like first include and last exclude
//  const numbers = [1,2,3,4,5,6,7]
// const newSliceArray = numbers.slice(1,5)
// console.log(numbers)
// console.log(newSliceArray)


//splice - is used to change the content of the array by removing or replacing existing add or adding new elements
//splice(startindex,deleteCount, item)

// let spliceNumber = numbers.splice(2,2,10,11)
// console.log(numbers)


// split example 

// let text = "i love javascript"
// const newText = text.split(" ")
// console.log(newText)

//object freeze 

// const person = {
//     name:"shisir shahi",
//     address:"salyan"
// }
// Object.freeze(person)
// person.name = "shahi"
// console.log(person)

//object key and value access 
// console.log(Object.keys(person))
// console.log(Object.values(person))




//conditional statement in javascript

// const isRaining = false;
// if (isRaining){
//     console.log("carry chhhata for rainging ")
// }else{
//     console.log("do not carry chhata")
// }

// const temperature = 30
// if (temperature>30){
//     console.log("it is a hot outside")
// }else if(temperature>25 && temperature<=30){
//     console.log("its a good environmet")
// }else{
//     console.log("it is the cold in the outside")
// }


// this is the ternary operator to write if else statament in javascrippt it make shortcut

// const result = isRaining ?"carry umberial": "do not carray umeberala";

//using short circut evolution
// const result = isRaining && "carry umeberelia" || "do not carry"
// console.log(result)
