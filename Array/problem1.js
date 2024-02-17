// const obj = {
//     name : "sandeep",
//     age : 21,
//     "key-item": "hello"

// }

// console.log(obj["key-item"]);


//map
const map = new Map([['a',1],['b',2]])

for(const [key,value] of map){
    console.log(`${key} : ${value}`);
}