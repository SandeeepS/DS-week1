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

    //apppend element
    // O(n)
     append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size ++
     }

     //insert and element 
     insert(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0 ; i < index-1 ; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
     }

     //remove an element from a index
     removeNode(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i = 0; i < index-1;i ++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
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
list.print()
list.prepend(10);
list.print()
list.prepend(20);
list.prepend(30);
list.append(40);
list.insert(60,0);
list.print()
list.removeNode(2)
list.print()

