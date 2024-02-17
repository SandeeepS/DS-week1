// const student1 = {
//     name : 'sandeep',
//     age : 21,
//     getWish: function (){
//         return "hello "+ this.name;
//     }
// }

// const student2 = {
//     name : 'manu',
//     age : 21,
//     getWish: function (){
//         return "hello "+ this.name;
//     }
// }
// console.log(student2.getWish());

//creating class 

class Student {
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    getWish(){
        return "hellow "+ this.name
    }
}

const student1 = new Student('sandeep',21);

console.log(student1.getWish());