class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0 
    }
    getSize(){
        return this.size
    }
 
    //prepend
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    //append
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++
    }

    //insert
    insert(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index == 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    //remove an element form a index
    removeNode(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let removednode ;
        if(index === 0){
            removednode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next;
            }
            removednode = prev.next;
            prev.next = removednode.next;
        }
        this.size++;
        return removednode.value;
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }else{
            let curr = this.head;
            let listVAlues = ''
            while(curr){
                listVAlues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listVAlues);
        }
    }

}

const list = new LinkedList();
list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(90);
list.append(80);
list.print();
list.insert(55,3);
list.print();
const removed =  list.removeNode(3);
console.log("rem:",removed);
list.print();
