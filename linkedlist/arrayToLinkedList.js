class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    
    
    insert(arr){
        for(let i =0 ; i < arr.length ; i++){
            this.prepend(arr[i]);
        }
    }

    //O(1)
    prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        node.next = this.head
        this.head = node
    }
    this.size ++
    }

    print(){
        if(this.isEmpty()){
            console.log("this list is empty");
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next 
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()
console.log('List is empty?',list.isEmpty())
console.log('List size ',list.getSize())

list.print();
let arr = [10,11,22,13,14];
list.insert(arr);
list.print();


