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

    removeDuplicate(){
        if(this.head === null || this.head.next === null){
            return;
        }

        let curr = this.head ;
        let uniqueValues = new Set();
        uniqueValues.add(curr.value);

        while(curr.next !== null){
            if(uniqueValues.has(curr.next.value)){
                curr.next = curr.next.next;
            }else{
                uniqueValues.add(curr.next.value);
                curr = curr.next;
            }
        }
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
list.prepend(10);
list.prepend(10);
list.prepend(10);
list.prepend(20);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(10);
list.prepend(30);
list.print();
list.removeDuplicate();
list.print();


